import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FundService } from '../../services/fund.service';
import { Fund } from '../../models/fund';

@Component({
  selector: 'app-investment-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './investment-form.component.html',
  styleUrl: './investment-form.component.css',
})
export class InvestmentFormComponent implements OnInit {
  funds$: Fund[] = [];
  investmentForm: FormGroup;

  constructor(
    private fundService: FundService,
    private formBuilder: FormBuilder
  ) {
    this.investmentForm = this.formBuilder.group({
      fundId: ['', Validators.required],
      amount: ['', [Validators.required, Validators.min(0)]],
      notificationPreferences: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loadFunds();
  }

  loadFunds() {
    this.fundService.getFunds().subscribe({
      next: (funds$) => {
        this.funds$ = funds$;
      },
      error: (error) => {
        console.error('Error al cargar los fondos:', error);
        this.showNotification('Error al cargar los fondos', 'error');
      },
    });
  }

  onSubmit() {
    if (this.investmentForm.valid) {
      const { fundId, amount, notificationPreferences } =
        this.investmentForm.value;

      console.log('Form data:', { fundId, amount, notificationPreferences });
      this.fundService
        .subscribeToFund(fundId, amount, notificationPreferences)
        .subscribe({
          next: () => {
            this.showNotification('Inversión realizada con éxito', 'success');
            this.investmentForm.reset();
          },
          error: (error) => {
            console.error('Error al realizar la inversión:', error);
            this.showNotification('Error al realizar la inversión', 'error');
          },
        });
    } else {
      this.showNotification(
        'Por favor, complete todos los campos correctamente',
        'error'
      );
    }
  }

  showNotification(message: string, type: 'success' | 'error' = 'success') {
    console.log(`${type.toUpperCase()}: ${message}`);
  }
}
