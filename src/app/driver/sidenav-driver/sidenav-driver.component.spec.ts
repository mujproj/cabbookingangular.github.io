import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavDriverComponent } from './sidenav-driver.component';

describe('SidenavDriverComponent', () => {
  let component: SidenavDriverComponent;
  let fixture: ComponentFixture<SidenavDriverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidenavDriverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidenavDriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
