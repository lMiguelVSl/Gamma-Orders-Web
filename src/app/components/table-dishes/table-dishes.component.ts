import { Component, OnInit } from '@angular/core';
import { BaseModule } from '../../shared/base/base.module';
import { Dish } from '../../services/Models/Dish.type';
import { Restaurant } from '../../services';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private route: ActivatedRoute) {
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
  }
}
