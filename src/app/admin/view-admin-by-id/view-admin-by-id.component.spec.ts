import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAdminByIdComponent } from './view-admin-by-id.component';

describe('ViewAdminByIdComponent', () => {
  let component: ViewAdminByIdComponent;
  let fixture: ComponentFixture<ViewAdminByIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewAdminByIdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAdminByIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
