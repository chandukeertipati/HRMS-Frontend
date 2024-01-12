import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeaveType } from '../../../../interfaces/leaveType';
import { LeaveTypeService } from '../../../../services/leaveType/leave-type.service';

@Component({
  selector: 'app-admin-leavetypes',
  templateUrl: './admin-leavetypes.component.html',
  styleUrl: './admin-leavetypes.component.scss'
})
export class AdminLeavetypesComponent implements OnInit {
  leaveTypes!: LeaveType[];
  constructor(private router: Router, private leaveTypeService: LeaveTypeService) { }
  ngOnInit() {
    this.loadLeaveTypes();
  }
  loadLeaveTypes() {
    this.leaveTypeService.getLeaveTypes().subscribe(leaveTypes => {
      this.leaveTypes = leaveTypes;
    });
  }
  editLeaveType(leaveType: LeaveType) {
    console.log(leaveType)
    // Example: this.router.navigate(['EditLeaveType', leaveType.id]);
  }
  navigateToAddHoliday() {
    this.router.navigate(['Add LeaveType']);
  }
}
