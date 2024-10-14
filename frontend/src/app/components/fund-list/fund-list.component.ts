import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';

//Servicios
import { FundService } from '../../services/fund/fund.service';

//Modelos
import { Fund } from '../../models/fund';

@Component({
  selector: 'app-fund-list',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './fund-list.component.html',
  styleUrl: './fund-list.component.css',
})
export class FundListComponent implements OnInit {
  funds: Fund[] = [];

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
}
