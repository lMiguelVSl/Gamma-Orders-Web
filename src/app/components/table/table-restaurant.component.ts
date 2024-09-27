import { Component } from '@angular/core';
import { User, UserService } from '../../services';
import { Router } from '@angular/router';
import { filter, take } from 'rxjs/operators';
import { BaseModule } from '../../shared/base/base.module';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [BaseModule],
  templateUrl: './table-restaurant.component.html',
  styleUrl: './table-restaurant.component.scss'
})
export class TableComponent {

  displayedColumns: any[] = ['title', 'is done', 'actions'];
  dataSource: User[] = [];

  constructor(private userService: UserService, private router: Router) {
    this.loadData();
  }

  loadData() {
    this.userService.getUsers().pipe(filter(x => x != undefined), take(1)).subscribe(data => {
      if(data.length === 0) this.router.navigate([`/actions`]);
      this.dataSource = data;
    });
  }

  deleteUser(element: User) {
    this.userService.deleteUser(element.id).subscribe({
      next: () => {
        this.loadData();
      },
      error: (err) => {
        console.error('delete user error:', err);
      }
    });
  }
}
