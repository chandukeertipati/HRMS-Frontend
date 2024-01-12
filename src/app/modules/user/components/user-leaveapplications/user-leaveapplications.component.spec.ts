import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLeaveapplicationsComponent } from './user-leaveapplications.component';

describe('UserLeaveapplicationsComponent', () => {
  let component: UserLeaveapplicationsComponent;
  let fixture: ComponentFixture<UserLeaveapplicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserLeaveapplicationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserLeaveapplicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
