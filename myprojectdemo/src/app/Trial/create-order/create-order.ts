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

  totalQuantity: number = 0;
  totalPrice: number = 0;

  constructor(private trialService: TrialService) {}

  calculateTotals(): void {
    const { totalQty, totalAmt } = this.trialService.calculateTotals(this.order);
    this.totalQuantity = totalQty;
    this.totalPrice = totalAmt;
  }

  saveOrders(): void {
    this.trialService.saveMultipleOrders(this.order).subscribe({
      next: (res) => {
        console.log('Orders saved successfully:', res);
        alert('Orders saved to db.json successfully!');
      },
      error: (err) => {
        console.error('Error saving orders:', err);
        alert('Failed to save orders.');
      }
    });
  }

}
