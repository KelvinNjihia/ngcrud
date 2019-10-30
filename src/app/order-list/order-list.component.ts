import { Component, OnInit } from '@angular/core';
import { OrdersService } from './../shared/orders.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  constructor( private orderservice: OrdersService) { }

  ngOnInit() {
    this.getCoffeeOrders();
  }

  coffeeOrders;

  getCoffeeOrders = () =>
    this.orderservice.getCoffeeOrders().subscribe(res => (this.coffeeOrders = res));

  markCompleted = data => this.orderservice.updateCoffeeOrder(data);

  deleteOrder = data => this.orderservice.deleteCoffeeOrder(data);

}
