import { Component } from '@angular/core';
import { Restaurant, User, UserService } from '../../services';
import { Router } from '@angular/router';
import { BaseModule } from '../../shared/base/base.module';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [BaseModule],
  templateUrl: './table-restaurant.component.html',
  styleUrl: './table-restaurant.component.scss'
})
export class TableComponent {

  displayedColumns: any[] = ['Name', 'Dishes'];
  dataSource: Restaurant[] = [{
    id: 0,
    name: '',
    dishes: [{
      id: 0,
      name: 'dish',
      price: 0,
      description: 'description'
    }],
  }];

  constructor(private userService: UserService, private router: Router) {
    this.loadData();
  }

  loadData() {
    // this.userService.getUsers().pipe(filter(x => x != undefined), take(1)).subscribe(data => {
    //   if(data.length === 0) this.router.navigate([`/actions`]);
    //   this.dataSource = data;
    // });
      let restaurants: Restaurant[] = [];
      restaurants.push({
        id: 0,
        name: 'Miguel\'s Restaurant',
        dishes: [{
          id: 0,
          name: 'burguer',
          price: 10000,
          description: 'Burguer with cheese'
        }, {
          id: 1,
          name: 'Pizza',
          price: 0,
          description: ''
        }]
      });
      this.dataSource = [...restaurants];
  }

  deleteUser(element: User) {
    // this.userService.deleteUser(element.id).subscribe({
    //   next: () => {
    //     this.loadData();
    //   },
    //   error: (err) => {
    //     console.error('delete user error:', err);
    //   }
    // });

    this.dataSource = this.dataSource.filter(x => x.id !== element.id);
  }
}
