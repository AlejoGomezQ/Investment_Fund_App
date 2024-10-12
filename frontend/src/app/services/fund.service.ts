import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fund } from '../models/fund';
import { NotificationPreferences } from '../models/notificationPreferences';
import { Transaction } from '../models/transaction';

@Injectable({
  providedIn: 'root',
})
export class FundService {
  private baseUrl = 'http://localhost:3000/api/investment-funds';

  constructor(private http: HttpClient) {}

  getFunds(): Observable<Fund[]> {
    return this.http.get<Fund[]>(`${this.baseUrl}/funds`);
  }

  subscribeToFund(
    fundId: number,
    amount: number,
    notificationPreferences: NotificationPreferences
  ): Observable<{
    fundId: number;
    amount: number;
    notificationPreferences: NotificationPreferences;
  }> {
    const userId = 11522345678;
    return this.http.post<{
      fundId: number;
      amount: number;
      notificationPreferences: NotificationPreferences;
    }>(`${this.baseUrl}/${userId}/subscribe`, {
      fundId,
      amount,
      notificationPreferences,
    });
  }

  cancelFund(
    userId: string,
    fundId: number
  ): Observable<{ userId: number; fundId: number }> {
    return this.http.post<{ userId: number; fundId: number }>(
      `${this.baseUrl}/${userId}/cancel`,
      { fundId }
    );
  }

  getActiveFunds(userId: string): Observable<Fund[]> {
    return this.http.get<Fund[]>(`${this.baseUrl}/${userId}/active-funds`);
  }

  getTransactions(userId: string): Observable<Transaction> {
    return this.http.get<Transaction>(`${this.baseUrl}/${userId}/transactions`);
  }
}
