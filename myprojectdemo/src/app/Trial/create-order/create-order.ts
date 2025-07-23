import { Component, OnInit } from '@angular/core';
import { OrderModel } from '../../../model/order.model';
import { TrialService } from '../../service/trial-service';

@Component({
  selector: 'app-create-order',
  standalone: false,
  templateUrl: './create-order.html',
  styleUrl: './create-order.css'
})
export class CreateOrder{

  order: OrderModel[] = [
     { size: 'S', quantity: 0, price: 0 },
    { size: 'M', quantity: 0, price: 0 },
    { size: 'L', quantity: 0, price: 0 }
  ];
   totalQuantity = 0;
  totalPrice = 0;
  constructor(private ts: TrialService){}

  calculateTotals(): void {
    let totalQty = 0;
    let totalAmt = 0;

    for (let item of this.order) {
      totalQty += item.quantity;
      totalAmt += item.quantity * item.price;
    }

    this.totalQuantity = totalQty;
    this.totalPrice = totalAmt;
  }

  saveOrders(): void {
    // ✅ First calculate grand totals
    let totalQty = 0;
    let totalAmt = 0;

    for (let item of this.order) {
      totalQty += item.quantity;
      totalAmt += item.quantity * item.price;
    }

    // ✅ Add the same total to every item
    const ordersWithTotals: OrderModel[] = this.order.map(item => ({
      ...item,
      totalQuantity: totalQty,
      totalPrice: totalAmt
    }));

    this.ts.saveMultipleOrders(ordersWithTotals).subscribe({
      next: res => {
        console.log('Orders saved with unified totals:', res);
        alert('Orders saved to db.json with shared totalQuantity and totalPrice!');
      },
      error: err => {
        console.error('Save failed:', err);
        alert('Save failed!');
      }
    });
  }

}
