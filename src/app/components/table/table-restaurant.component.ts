import { Component, OnInit } from '@angular/core';
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
export class TableComponent implements OnInit {

  displayedColumns: any[] = ['Name', 'See Dishes'];
  dataSource: Restaurant[] = [];
  authenticated: boolean = false;

  constructor(private restaurantService: RestaurantService, private router: Router) {
  }
  ngOnInit(): void {
    sessionStorage.getItem('userId') ? this.authenticated = true : this.authenticated = false;
    if(!this.authenticated) this.router.navigate(['/NotAuthorized']);
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