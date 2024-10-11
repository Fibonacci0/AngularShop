import { Routes } from '@angular/router';
import { ProductsTableComponent } from './products-table/products-table.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    { path: 'list', component: ProductsTableComponent },
    { path: 'about', component: AboutComponent },
];
