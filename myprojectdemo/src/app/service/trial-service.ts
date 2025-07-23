import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OrderModel } from '../../model/order.model';

@Injectable({
  providedIn: 'root'
})
export class TrialService {

  private baseUrl: string = "http://localhost:3000/order";

  constructor(private http: HttpClient) { }

 calculateTotals(order: OrderModel[]): { totalQty: number; totalAmt: number; updatedOrders: OrderModel[] } {
    let totalQty = 0;
    let totalAmt = 0;

    const updatedOrders = order.map(order => {
      const totalItemPrice = order.quantity * order.price;
      order.totalQuantity = order.quantity;
      order.totalPrice = totalItemPrice;
      totalQty += order.quantity;
      totalAmt += totalItemPrice;
      return order;
    });

    return { totalQty, totalAmt, updatedOrders };
  }

  saveOrder(order: OrderModel): Observable<OrderModel> {
    return this.http.post<OrderModel>(this.baseUrl, order);
  }

  saveMultipleOrders(orders: OrderModel[]): Observable<OrderModel[]> {
    const requests = orders.map(order => this.saveOrder(order));
    return new Observable(observer => {
      let results: OrderModel[] = [];
      let completed = 0;

      requests.forEach(req =>
        req.subscribe({
          next: (res) => {
            results.push(res);
            completed++;
            if (completed === requests.length) {
              observer.next(results);
              observer.complete();
            }
          },
          error: (err) => observer.error(err)
        })
      );
    });
  }

  getOrders(): Observable<OrderModel[]> {
    return this.http.get<OrderModel[]>(this.baseUrl);
  }
}
