import { Component } from '@angular/core';
import { FundListComponent } from '../../components/fund-list/fund-list.component';
import { TransactionHistoryComponent } from '../../components/transaction-history/transaction-history.component';
import { InvestmentFormComponent } from '../../components/investment-form/investment-form.component';

@Component({
  selector: 'app-investment-funds',
  standalone: true,
  imports: [
    FundListComponent,
    TransactionHistoryComponent,
    InvestmentFormComponent,
  ],
  templateUrl: './investment-funds.component.html',
  styleUrl: './investment-funds.component.css',
})
export class InvestmentFundsComponent {}
