import { Component, OnInit } from '@angular/core';
import { FundService } from '../../services/fund/fund.service';
import { CommonModule, CurrencyPipe, DatePipe } from '@angular/common';
import { Transaction } from '../../models/transaction';

@Component({
  selector: 'app-transaction-history',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, DatePipe],
  templateUrl: './transaction-history.component.html',
  styleUrl: './transaction-history.component.css',
})
export class TransactionHistoryComponent implements OnInit {
  transactions$: Transaction[] = [];
  userId: string = '11522345678';

  constructor(private fundService: FundService) {}

  ngOnInit(): void {
    this.loadTransactions();
  }

  loadTransactions(): void {
    this.fundService.getTransactions(this.userId).subscribe({
      next: (response) => {
        this.transactions$ = response.transactions;
      },
      error: (error) => {
        console.error('Error al cargar las transacciones:', error);
      },
    });
  }
}
