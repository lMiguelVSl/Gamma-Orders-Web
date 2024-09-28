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
  User: User = { id: 0, idClient: 0, name: '', ubication: '', email: '' };
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
  // ngOnInit(): void {
  //   this.route.queryParams.subscribe((params: Params) => {
  //     if (params['title'])  {
  //       this.UserId = parseInt(params['id']);
  //       this.UserForm.patchValue({
  //         title: params['title'],
  //         isDone: params['isDone'] === 'true' ? true : false,
  //       });
  //     } else {
  //       this.UserForm.patchValue({
  //         title: '',
  //         isDone: false,
  //       });
  //     }
  //   });
  // }

  addUser() {
    if (this.UserForm.status === 'VALID') {
      this.User.name = this.UserForm.value.name;
      this.User.email = this.UserForm.value.email;
      this.User.ubication = this.UserForm.value.ubication;

      this.users.push(this.User);
      localStorage.setItem('users', JSON.stringify(this.users));
      // this.userService.createUser(this.User).pipe().subscribe(
      //   {
      //     next: (id) => {
      //       if (id != 0) this.nagivate('grid');
      //     },
      //     error: (err) => {
      //       console.group('Error Adding User:', err);
      //     }
      //   }
      // );
    }

    this.UserForm.reset();
    this.router.navigate(['/item-list']);
  }

  // updateUser() {
  //   if (this.UserForm.status === 'VALID') {
  //     this.User.id = this.UserId;
  //     this.User.title = this.UserForm.value.title;
  //     this.User.isDone = this.UserForm.value.isDone;

  //     this.UserService.updateUser(this.User).subscribe({
  //       next: (res) => {
  //         console.log('update response', res);
  //         this.router.navigate(['/item-list']);
  //       },
  //       error: (err) => {
  //         console.log('error updating User:', err);
  //       }
  //     });
  //   }
  // }

  nagivate(page: string) {
    switch (page) {
      case 'grid':
        this.router.navigate(['/item-list']);
        break;
    }
  }
}
