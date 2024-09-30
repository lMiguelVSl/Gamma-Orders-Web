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
        path: 'item-list/orders/:idUser',
        component: TableOrdersComponent,
    },
    {
        path: 'actions',
        component: FormComponent,
    },
    {
        path: 'item-list',
        component: TableComponent,
    },
    {
        path: 'Home',
        component: HomeComponent
    },
    {
        path: '',
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
