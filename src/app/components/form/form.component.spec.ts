import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { FormComponent } from './form.component';
import { UserService } from '../../services';
import { ActivatedRoute } from '@angular/router';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;
  let UserServiceMock: any;

  beforeEach(async () => {
    UserServiceMock = {
      createUser: jasmine.createSpy('createUser').and.returnValue(of(1)),
      updateUser: jasmine.createSpy('updateUser').and.returnValue(of({}))
    };

    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormComponent],
      providers: [
        { provide: UserService, useValue: UserServiceMock },
        {
          provide: ActivatedRoute,
          useValue: {
            queryParams: of({ id: '1', title: 'Test Title', isDone: 'true' })
          }
        }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});