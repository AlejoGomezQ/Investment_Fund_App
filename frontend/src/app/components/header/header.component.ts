import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent implements OnInit {
  userName: string = 'Jhon Doe';
  userId: number = 11522345678;
  availableAmount: number = 500000;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.loadUserInfo();
  }

  loadUserInfo() {
    this.userService.getUserInfo(this.userId).subscribe({
      next: (userInfo) => {
        this.userName = userInfo.name;
        this.availableAmount = userInfo.balance;
      },
      error: (error) => {
        console.error('Error loading user info:', error);
      },
    });
  }
}
