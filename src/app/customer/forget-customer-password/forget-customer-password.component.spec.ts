import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetCustomerPasswordComponent } from './forget-customer-password.component';

describe('ForgetCustomerPasswordComponent', () => {
  let component: ForgetCustomerPasswordComponent;
  let fixture: ComponentFixture<ForgetCustomerPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetCustomerPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetCustomerPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
