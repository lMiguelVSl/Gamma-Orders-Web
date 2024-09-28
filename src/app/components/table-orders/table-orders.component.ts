import { Component } from '@angular/core';
import { User, UserService } from '../../services';
import { Router } from '@angular/router';
import { BaseModule } from '../../shared/base/base.module';
import { Dish } from '../../services/Models/Dish.type';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [BaseModule],
  templateUrl: './table-orders.component.html',
  styleUrl: './table-orders.component.scss'
})
export class TableOrdersComponent {

  displayedColumns: any[] = ['Name', 'Price', 'Description', 'Add'];
  dataSource: Dish[] = [];
  itemsAdded: Dish[] = [];

  constructor(private userService: UserService, private router: Router) {
    this.loadData();
  }

  loadData() {
    // this.userService.getUsers().pipe(filter(x => x != undefined), take(1)).subscribe(data => {
    //   if(data.length === 0) this.router.navigate([`/actions`]);
    //   this.dataSource = data;
    // });
    let dishesState = localStorage.getItem('dishes');
    if(dishesState) {
      let dishes: Dish[] = JSON.parse(dishesState) as Dish[];
      this.dataSource = [...dishes];
    } else {
      this.dataSource = [{
        id: 0,
        name: 'burguer',
        price: 10000,
        description: 'Burguer with cheese'
      }, {
        id: 1,
        name: 'Pizza',
        price: 25000,
        description: 'Hawaiana'
      }]
    }
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

  AddItem(element: Dish) {
    this.itemsAdded.push(element);
  }
}
