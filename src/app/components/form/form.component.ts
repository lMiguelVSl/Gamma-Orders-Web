import { Component } from '@angular/core';
import { MaterialModule } from '../../shared/material/material.module';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { BaseModule } from '../../shared/base/base.module';
import { User, UserService } from '../../services';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [MaterialModule, BaseModule],
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormComponent {
  User: User = { id: 0, nombre: '', ubication: '', email: '' };
  UserForm: FormGroup;
  UserId: number = 0;

  users: User[] = [];

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, private route: ActivatedRoute) {
    this.UserForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      ubication: ['', Validators.required]
    });

  }

  addUser() {
    if (this.UserForm.status === 'VALID') {
      this.User.nombre = this.UserForm.value.name;
      this.User.email = this.UserForm.value.email;
      this.User.ubication = this.UserForm.value.ubication;

      this.userService.createUser(this.User).subscribe(
        {
          next: (id) => {
            if (id != 0) this.nagivate('grid');
          },
          error: (err) => {
            console.group('Error Adding User:', err);
          }
        }
      );
      this.UserForm.reset();
      this.router.navigate(['/item-list']);
    }
  }

  nagivate(page: string) {
    switch (page) {
      case 'grid':
        this.router.navigate(['/item-list']);
        break;
    }
  }
}
