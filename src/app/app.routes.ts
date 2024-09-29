import { Routes } from '@angular/router';
import { HomeComponent, ErrorPageComponent, NotAuthPageComponent } from './views';
import { FormComponent, TableComponent } from './components';
import { TableOrdersComponent } from './components/table-orders/table-orders.component';
import { TableDishesComponent } from './components/table-dishes/table-dishes.component';

export const routes: Routes = [
    {
        path: 'dishes/:idRestaurante',
        component: TableDishesComponent,
    },
        {
        path: 'item-list/dishes',
        component: TableOrdersComponent,
    },
    {
        path: 'actions',
        component: FormComponent,
        //canActivate: [AuthGuard]
    },
    {
        path: 'item-list',
        component: TableComponent,
        //canActivate: [AuthGuard]
    },
    {
        path: 'Home',
        component: HomeComponent
    },
    {
        path: 'NotAuthorized',
        component: NotAuthPageComponent
    },
    {
        path: '**',
        component: ErrorPageComponent
    }
];
