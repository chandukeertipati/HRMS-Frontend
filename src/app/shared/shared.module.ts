import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    declarations: [],
    imports: [
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        MatButtonModule,
        MatFormFieldModule,
        MatTableModule,
        FontAwesomeModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,


    ],
    exports: [
        MatIconModule,
        MatListModule,
        MatSidenavModule,
        MatToolbarModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatSelectModule,
        MatButtonModule,
        MatFormFieldModule,
        MatTableModule,
        FontAwesomeModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ]
})
export class SharedModule { }