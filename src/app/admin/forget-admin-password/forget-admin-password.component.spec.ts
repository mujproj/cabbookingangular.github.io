import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ForgetAdminPasswordComponent } from './forget-admin-password.component';

describe('ForgetAdminPasswordComponent', () => {
  let component: ForgetAdminPasswordComponent;
  let fixture: ComponentFixture<ForgetAdminPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ForgetAdminPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ForgetAdminPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
