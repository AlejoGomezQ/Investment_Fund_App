import { Component } from '@angular/core';
import { FundListComponent } from '../../components/fund-list/fund-list.component';
import { TransactionHistoryComponent } from '../../components/transaction-history/transaction-history.component';
import { InvestmentFormComponent } from '../../components/investment-form/investment-form.component';
import { ActiveFundsComponent } from '../../components/active-funds/active-funds.component';
import { HeaderComponent } from '../../components/header/header.component';

@Component({
  selector: 'app-investment-funds',
  standalone: true,
  imports: [
    FundListComponent,
    TransactionHistoryComponent,
    InvestmentFormComponent,
    ActiveFundsComponent,
    HeaderComponent,
  ],
  templateUrl: './investment-funds.component.html',
  styleUrl: './investment-funds.component.css',
})
export class InvestmentFundsComponent {}
