import { Component, OnInit } from '@angular/core';
import { FundService } from '../../services/fund.service';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ConfirmationModalComponent } from '../confirmation-modal/confirmation-modal.component';
import { Fund } from '../../models/fund';

@Component({
  selector: 'app-active-funds',
  standalone: true,
  imports: [CommonModule, CurrencyPipe, ConfirmationModalComponent],
  templateUrl: './active-funds.component.html',
  styleUrl: './active-funds.component.css',
})
export class ActiveFundsComponent implements OnInit {
  activeFunds: any[] = [];
  userId: string = '11522345678';
  isModalOpen: boolean = true;
  selectedFund: any = null;

  constructor(private fundService: FundService) {}

  ngOnInit(): void {
    this.loadActiveFunds();
  }

  loadActiveFunds(): void {
    this.fundService.getActiveFunds(this.userId).subscribe({
      next: (funds) => {
        this.activeFunds = funds;
      },
      error: (error) => {
        console.error('Error loading active funds:', error);
      },
    });
  }

  onCancelFund(fund: Fund): void {
    this.selectedFund = fund;
    this.isModalOpen = true;
  }

  confirmCancelFund(): void {
    if (this.selectedFund) {
      this.fundService
        .cancelFund(this.userId, this.selectedFund.fundId)
        .subscribe({
          next: () => {
            this.loadActiveFunds(); // Refresh the list after cancellation
            this.closeModal();
          },
          error: (error) => {
            console.error('Error canceling fund:', error);
            // Handle error (e.g., show error message to user)
          },
        });
    }
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedFund = null;
  }
}
