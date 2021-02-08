import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBestDriversComponent } from './view-best-drivers.component';

describe('ViewBestDriversComponent', () => {
  let component: ViewBestDriversComponent;
  let fixture: ComponentFixture<ViewBestDriversComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewBestDriversComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewBestDriversComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
