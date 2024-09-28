import { Routes } from '@angular/router';
import { HomeComponent, ErrorPageComponent, NotAuthPageComponent } from './views';
import { FormComponent, TableComponent } from './components';
import { AuthGuard } from './auth/guards/auth.guard';
import { TableOrdersComponent } from './components/table-orders/table-orders.component';

export const routes: Routes = [
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
