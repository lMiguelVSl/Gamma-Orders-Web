import { Component } from '@angular/core';
import { BaseModule } from '../../shared/base/base.module';

@Component({
  selector: 'app-not-auth-page',
  standalone: true,
  imports: [BaseModule],
  templateUrl: './not-auth-page.component.html',
  styleUrl: './not-auth-page.component.scss'
})
export class NotAuthPageComponent {

}
