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
  activeFunds$: any[] = [];
  userId: string = '11522345678';
  isModalOpen: boolean = false;
  selectedFund: any = null;

  constructor(private fundService: FundService) {}

  ngOnInit(): void {
    this.loadActiveFunds();
  }

  loadActiveFunds(): void {
    this.fundService.getActiveFunds(this.userId).subscribe({
      next: (user) => {
        this.activeFunds$ = user.funds;
        console.log('Fondos activos:', this.activeFunds$);
      },
      error: (error) => {
        console.error('Error al cargar los fondos:', error);
      },
    });
  }

  onCancelFund(fund: Fund): void {
    this.selectedFund = fund;
    this.isModalOpen = true;
  }

  confirmCancelFund(): void {
    if (this.selectedFund) {
      const { fundId, fundName } = this.selectedFund;

      console.log('Cancelando fondo:', fundId, fundName, this.userId);
      this.fundService.cancelFund(this.userId, fundId).subscribe({
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
