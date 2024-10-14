import { Component, OnInit } from '@angular/core';
import { FundService } from '../../services/fund/fund.service';
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
  activeFunds$: any[] = [];
  userId: string = '11522345678';
  isModalOpen: boolean = false;
  selectedFund: Fund | null = null;

  constructor(private fundService: FundService) {}

  ngOnInit(): void {
    this.loadActiveFunds();
  }

  loadActiveFunds(): void {
    this.fundService.getActiveFunds(this.userId).subscribe({
      next: (user) => {
        this.activeFunds$ = user.funds;
      },
      error: (error) => {
        console.error('Error al cargar los fondos:', error);
      },
    });
  }

  onCancelFund(fund: Fund): void {
    console.log('Canceling fund:', fund);
    this.selectedFund = fund;
    this.isModalOpen = true;
  }

  confirmCancelFund(): void {
    if (this.selectedFund) {
      const { fundId } = this.selectedFund;

      this.fundService.cancelFund(this.userId, Number(fundId)).subscribe({
        next: () => {
          this.loadActiveFunds();
          this.closeModal();
        },
        error: (error) => {
          console.error('Error canceling fund:', error);
        },
      });
    }
  }

  closeModal(): void {
    this.isModalOpen = false;
    this.selectedFund = null;
  }
}
