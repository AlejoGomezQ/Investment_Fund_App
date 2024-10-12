import { Component, OnInit } from '@angular/core';
import {
  ReactiveFormsModule,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { FundService } from '../../services/fund.service';
import { Fund } from '../../models/fund';
import { ToastComponent } from '../toast/toast.component';

@Component({
  selector: 'app-investment-form',
  standalone: true,
  imports: [ReactiveFormsModule, ToastComponent],
  templateUrl: './investment-form.component.html',
  styleUrl: './investment-form.component.css',
})
export class InvestmentFormComponent implements OnInit {
  funds$: Fund[] = [];
  investmentForm: FormGroup;
  showToast: boolean = false;
  toastMessage: string = '';
  toastSuccess: boolean = true;

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
      },
    });
  }

  onSubmit() {
    if (this.investmentForm.valid) {
      const { fundId, amount, notificationPreferences } =
        this.investmentForm.value;
      const selectedFund = this.funds$.find((fund) => fund.fundId === fundId);

      this.fundService
        .subscribeToFund(fundId, amount, notificationPreferences)
        .subscribe({
          next: () => {
            this.showToastMessage(
              `Has suscrito al fondo ${selectedFund?.name}`,
              true
            );
            this.investmentForm.reset();
          },
          error: (error) => {
            this.showToastMessage(
              `No puedes suscribirte al fondo ${selectedFund?.name}`,
              false
            );
            console.error('Error al realizar la inversión:', error);
          },
        });
    } else {
      this.showToastMessage(
        'Por favor, complete todos los campos correctamente',
        false
      );
    }
  }

  showToastMessage(message: string, isSuccess: boolean) {
    this.toastMessage = message;
    this.toastSuccess = isSuccess;
    this.showToast = true;
    setTimeout(() => {
      this.showToast = false;
    }, 3000);
  }
}
