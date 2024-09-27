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
  User: User = { id: 0, firstName: '', secondName: '', ubication: '' };
  UserForm: FormGroup;
  UserId: number = 0;

  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router, private route: ActivatedRoute) {
    this.UserForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      secondName: ['', Validators.required],
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
      this.User.firstName = this.UserForm.value.firstName;
      this.User.secondName = this.UserForm.value.secondName;
      this.User.ubication = this.UserForm.value.ubication;

      this.userService.createUser(this.User).pipe().subscribe(
        {
          next: (id) => {
            if (id != 0) this.nagivate('grid');
          },
          error: (err) => {
            console.group('Error Adding User:', err);
          }
        }
      );
    }
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
