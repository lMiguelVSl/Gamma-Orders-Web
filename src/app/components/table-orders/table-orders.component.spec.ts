import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableOrdersComponent } from './table-orders.component';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from '../../services';
import { of } from 'rxjs';

describe('TableOrdersComponent', () => {
  let component: TableOrdersComponent;
  let fixture: ComponentFixture<TableOrdersComponent>;
  let UserServiceMock = {
    getUsers: jasmine.createSpy('getUsers').and.returnValue(of([
      { id: 1, title: 'Test User 1', isDone: false },
      { id: 2, title: 'Test User 2', isDone: true }
    ]))
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableOrdersComponent, RouterTestingModule],
      providers: [
        {
          provide: UserService,
          useValue: UserServiceMock
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TableOrdersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
