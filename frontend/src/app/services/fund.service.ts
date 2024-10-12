import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fund } from '../models/fund';
import { NotificationPreferences } from '../models/notificationPreferences';

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
  ): Observable<any> {
    const userId = 11522345678;
    return this.http.post(`${this.baseUrl}/${userId}/subscribe`, {
      fundId,
      amount,
      notificationPreferences,
    });
  }

  cancelFund(fundId: number): Observable<any> {
    const userId = 'current-user-id';
    return this.http.post(`${this.baseUrl}/${userId}/cancel`, { fundId });
  }
}
