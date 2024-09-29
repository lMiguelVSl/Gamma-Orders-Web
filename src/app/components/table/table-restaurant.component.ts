import { Component } from '@angular/core';
import { Restaurant } from '../../services';
import { Router } from '@angular/router';
import { BaseModule } from '../../shared/base/base.module';
import { RestaurantService } from '../../services/restaurant/restaurant.service';
import { filter, map, take } from 'rxjs/operators';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [BaseModule],
  templateUrl: './table-restaurant.component.html',
  styleUrl: './table-restaurant.component.scss'
})
export class TableComponent {

  displayedColumns: any[] = ['Name', 'See Dishes'];
  dataSource: Restaurant[] = [];

  constructor(private restaurantService: RestaurantService) {
    this.loadData();
  }

  loadData() {
    this.restaurantService.getRestaurants()
      .pipe(
        filter(x => x != undefined),
        take(1)
      )
      .subscribe(data => {
        this.dataSource = data;
        sessionStorage.setItem('restaurants', JSON.stringify(data));
      });
  }
}