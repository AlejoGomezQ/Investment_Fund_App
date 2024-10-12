import { Component, Input, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-toast',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.css',
  animations: [
    trigger('toastAnimation', [
      state(
        'void',
        style({
          transform: 'translateY(100%)',
          opacity: 0,
        })
      ),
      state(
        '*',
        style({
          transform: 'translateY(0)',
          opacity: 1,
        })
      ),
      transition('void => *', animate('500ms ease-out')),
      transition('* => void', animate('500ms ease-in')),
    ]),
  ],
})
export class ToastComponent implements OnInit {
  @Input() message: string = '';
  @Input() isSuccess: boolean = true;
  @Input() duration: number = 3000;
  show: boolean = false;

  ngOnInit() {
    this.show = true;
    setTimeout(() => {
      this.show = false;
    }, this.duration);
  }
}
