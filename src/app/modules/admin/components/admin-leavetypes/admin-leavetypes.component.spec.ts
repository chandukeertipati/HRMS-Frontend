import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLeavetypesComponent } from './admin-leavetypes.component';

describe('AdminLeavetypesComponent', () => {
  let component: AdminLeavetypesComponent;
  let fixture: ComponentFixture<AdminLeavetypesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminLeavetypesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminLeavetypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
