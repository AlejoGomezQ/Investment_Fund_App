import { Component } from '@angular/core';
import { FundListComponent } from '../../components/fund-list/fund-list.component';
import { TransactionHistoryComponent } from '../../components/transaction-history/transaction-history.component';

@Component({
  selector: 'app-investment-funds',
  standalone: true,
  imports: [FundListComponent, TransactionHistoryComponent],
  templateUrl: './investment-funds.component.html',
  styleUrl: './investment-funds.component.css',
})
export class InvestmentFundsComponent {}
