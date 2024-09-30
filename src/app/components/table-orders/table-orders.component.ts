import { Component, OnInit } from '@angular/core';
import { BaseModule } from '../../shared/base/base.module';
import { OrderService } from '../../services/order/order.service';
import { ActivatedRoute } from '@angular/router';
import { Order } from '../../services/order/models';

@Component({
  selector: 'app-table-orders',
  standalone: true,
  imports: [BaseModule],
  templateUrl: './table-orders.component.html',
  styleUrl: './table-orders.component.scss'
})
export class TableOrdersComponent implements OnInit {

  displayedColumns: any[] = ['Price', 'Description', 'Add'];
  dataSource: Order[] = [];

  constructor(private orderService: OrderService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('idUser');
    if (userId) this.orderService.getOrdersByClientId(userId).subscribe(orders => {
      console.log(orders);
      this.dataSource = orders;
    });
  }
}
