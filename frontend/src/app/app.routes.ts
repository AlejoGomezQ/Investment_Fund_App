import { Routes } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { InvestmentFundsComponent } from './views/investment-funds/investment-funds.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'fondos-inversion',
    component: InvestmentFundsComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
