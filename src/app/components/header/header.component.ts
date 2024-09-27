import { Component, OnInit } from '@angular/core';
import { MaterialModule } from '../../shared/material/material.module';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HeaderFacade } from './facade/header.facade';
import { map } from 'rxjs';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MaterialModule, RouterOutlet, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{

  user: string = 'Empty';
  constructor(private headerFacade: HeaderFacade) { }

  ngOnInit(): void {
    window.onbeforeunload = () => {
      localStorage.clear();
    };
  }

  GetToken() {
    this.headerFacade.GetToken('username').pipe(map(x => {
      localStorage.setItem('user', x.toString());
    })).subscribe({
      next: () => {
        this.user = localStorage.getItem('user')?.valueOf() ?? 'Not Authenticated';
      },
      error: (error) => {
        console.error('Error getting user: ',error);
      }
    });
  }
}
