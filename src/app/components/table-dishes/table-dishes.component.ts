import { Component, OnInit } from '@angular/core';
import { BaseModule } from '../../shared/base/base.module';
import { Dish } from '../../services/Models/Dish.type';
import { Restaurant, User } from '../../services';
import { ActivatedRoute } from '@angular/router';
import { OrderService } from '../../services/order/order.service';
import { Order } from '../../services/order/models';

@Component({
  selector: 'app-table-dishes',
  standalone: true,
  imports: [BaseModule],
  templateUrl: './table-dishes.component.html',
  styleUrl: './table-dishes.component.scss'
})
export class TableDishesComponent implements OnInit {

  displayedColumns: any[] = ['Name', 'Price', 'Add'];
  dataSource: Dish[] = [];
  itemsAdded: Dish[] = [];
  totalAmount: number = 0;

  constructor(private route: ActivatedRoute, private orderService: OrderService) {
  }

  ngOnInit(): void {
    const restaurantState = sessionStorage.getItem('restaurants');
    let restaurants: Restaurant[] = [];

    if (restaurantState) {
      restaurants = JSON.parse(restaurantState) as Restaurant[];
    }

    const idRestaurante = this.route.snapshot.paramMap.get('idRestaurante');
    if (idRestaurante) {
      const restaurant = restaurants.find(r => r.idRestaurante === +idRestaurante);
      if (restaurant) {
        this.dataSource = restaurant.platos;
      }
    }
  }

  AddItem(element: Dish) {
    this.itemsAdded.push(element);
    this.totalAmount = this.itemsAdded.reduce((acc, item) => acc + item.precio, 0);
  }

  createOrder() {
    if(this.itemsAdded.length === 0) {
      alert('No se ha seleccionado ningún plato');
      return;
    }

    let user: User = {
      id: 2,
      nombre: 'Miguel',
      email: 'miguel.test@hotmail.com',
      ubicacion: 'K12 8'
    }

    let orderRequest: Order = {
      cliente: user,
      estado: 'CREADO',
      platos: this.itemsAdded
    };


    this.orderService.postOrders(orderRequest).subscribe({
      next: data => {
        console.log('Pedido creado:', data);
        this.itemsAdded = [];
        this.totalAmount = 0;
      },
      error: err => {
        console.error('Error al crear el pedido: ', err);
      }
    });

  }
}
