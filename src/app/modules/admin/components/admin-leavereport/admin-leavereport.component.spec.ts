import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLeavereportComponent } from './admin-leavereport.component';

describe('AdminLeavereportComponent', () => {
  let component: AdminLeavereportComponent;
  let fixture: ComponentFixture<AdminLeavereportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminLeavereportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminLeavereportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
