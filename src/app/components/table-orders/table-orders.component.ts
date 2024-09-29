import { Component, OnInit } from '@angular/core';
import { BaseModule } from '../../shared/base/base.module';
import { Dish } from '../../services/Models/Dish.type';

@Component({
  selector: 'app-table-orders',
  standalone: true,
  imports: [BaseModule],
  templateUrl: './table-orders.component.html',
  styleUrl: './table-orders.component.scss'
})
export class TableOrdersComponent implements OnInit {

  displayedColumns: any[] = ['Name', 'Price', 'Description', 'Add'];
  dataSource: Dish[] = [];
  itemsAdded: Dish[] = [];

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  AddItem(element: Dish) {
    this.itemsAdded.push(element);
  }
}
