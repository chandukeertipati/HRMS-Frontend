import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLeaveapplicationsComponent } from './admin-leaveapplications.component';

describe('AdminLeaveapplicationsComponent', () => {
  let component: AdminLeaveapplicationsComponent;
  let fixture: ComponentFixture<AdminLeaveapplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminLeaveapplicationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminLeaveapplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
