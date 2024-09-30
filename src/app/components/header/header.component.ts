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
  constructor() { }

  ngOnInit(): void {
    window.onbeforeunload = () => {
      sessionStorage.clear();
    };
  }

  GetToken() {
    sessionStorage.setItem('userId', '2');
    this.user = 'Miguel';
  }
}
