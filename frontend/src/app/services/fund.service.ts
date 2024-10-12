import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fund } from '../models/fund';

@Injectable({
  providedIn: 'root',
})
export class FundService {
  private apiUrl =
    'http://localhost:3000/api/investment-funds/670970e4bb534b1383dbfaf7';

  constructor(private http: HttpClient) {}

  getFunds(): Observable<Fund[]> {
    return this.http.get<Fund[]>(this.apiUrl);
  }

  subscribeToFund(fundId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${fundId}/subscribe`, {});
  }

  cancelFund(fundId: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/${fundId}/leave`, {});
  }
}
