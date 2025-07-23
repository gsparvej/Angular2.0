import { Component, OnInit } from '@angular/core';
import { OrderModel } from '../../../model/order.model';
import { TrialService } from '../../service/trial-service';

@Component({
  selector: 'app-view-order',
  standalone: false,
  templateUrl: './view-order.html',
  styleUrl: './view-order.css'
})
export class ViewOrder implements OnInit{

  orders: OrderModel[] = [];

  constructor(private ts: TrialService) {}

  ngOnInit(): void {
    this.loadOrders();
  }

  loadOrders(): void {
    this.ts.getOrders().subscribe({
      next: (data) => {
        this.orders = data;
      },
      error: (err) => {
        console.error('Error fetching orders:', err);
        alert('Failed to load orders');
      }
    });
  }
}
