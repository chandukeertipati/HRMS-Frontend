import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminEmployeereportComponent } from './admin-employeereport.component';

describe('AdminEmployeereportComponent', () => {
  let component: AdminEmployeereportComponent;
  let fixture: ComponentFixture<AdminEmployeereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminEmployeereportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminEmployeereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
