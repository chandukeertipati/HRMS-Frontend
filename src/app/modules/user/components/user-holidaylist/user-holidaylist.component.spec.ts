import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHolidaylistComponent } from './user-holidaylist.component';

describe('UserHolidaylistComponent', () => {
  let component: UserHolidaylistComponent;
  let fixture: ComponentFixture<UserHolidaylistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserHolidaylistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserHolidaylistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
