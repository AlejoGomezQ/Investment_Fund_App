import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { User } from '../../models/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl = 'http://localhost:3000/api/investment-funds';
  private balance$ = new BehaviorSubject<number>(500000);

  constructor(private http: HttpClient) {}

  getUserInfo(userId: number): Observable<User> {
    return this.http
      .get<User>(`${this.baseUrl}/${userId}`)
      .pipe(tap((userInfo) => this.balance$.next(userInfo.balance)));
  }

  updateBalance(amount: number): void {
    const currentBalance = this.balance$.value;
    this.balance$.next(currentBalance - amount);
  }

  getBalance(): Observable<number> {
    return this.balance$.asObservable();
  }
}
