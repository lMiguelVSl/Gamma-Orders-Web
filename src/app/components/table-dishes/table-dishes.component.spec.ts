import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableDishesComponent } from './table-dishes.component';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from '../../services';
import { of } from 'rxjs';

describe('TableDishesComponent', () => {
  let component: TableDishesComponent;
  let fixture: ComponentFixture<TableDishesComponent>;
  let UserServiceMock = {
    getUsers: jasmine.createSpy('getUsers').and.returnValue(of([
      { id: 1, title: 'Test User 1', isDone: false },
      { id: 2, title: 'Test User 2', isDone: true }
    ]))
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TableDishesComponent, RouterTestingModule],
      providers: [
        {
          provide: UserService,
          useValue: UserServiceMock
        }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TableDishesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
