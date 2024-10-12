import { Component, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { FundService } from '../../services/fund.service';

@Component({
  selector: 'app-fund-list',
  standalone: true,
  imports: [],
  templateUrl: './fund-list.component.html',
  styleUrl: './fund-list.component.css',
})
export class FundListComponent implements OnInit {
  funds: any[] = [];

  constructor(private fundService: FundService) {}

  ngOnInit() {
    this.loadFunds();
  }

  loadFunds() {
    this.fundService.getFunds().subscribe({
      next: (funds) => {
        this.funds = funds;
      },
      error: (error) => {
        console.error('Error al cargar los fondos:', error);
      },
    });
  }

  subscribeToFund(fund: any) {
    this.fundService.subscribeToFund(fund.id).subscribe({
      next: () => {
        this.showNotification('Subscripción exitosa al fondo' + fund.name);
      },
      error: (error) => {
        console.error('Error al subscribirse al fondo: ', error);
      },
    });
  }

  cancelFund(fund: any) {
    this.fundService.cancelFund(fund.id).subscribe({
      next: () => {
        this.showNotification('Se canceló la suscripción al fondo' + fund.name);
      },
      error: (error) => {
        console.error('Error al cancelar el fondo: ', error);
      },
    });
  }

  showNotification(message: string) {}
}
