import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveFundsComponent } from './active-funds.component';

describe('ActiveFundsComponent', () => {
  let component: ActiveFundsComponent;
  let fixture: ComponentFixture<ActiveFundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActiveFundsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActiveFundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
