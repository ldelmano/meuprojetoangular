import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatCardModule,
  MatListModule,
  MatIconModule,
  MatDividerModule,
  MatButtonModule,
  MatSlideToggleModule,
  MatInputModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatSelectModule
 } from '@angular/material';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatInputModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatSelectModule
  ],
  declarations: [],
  exports: [
    MatCardModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    HttpClientModule,
    MatSlideToggleModule,
    MatInputModule,
    MatSnackBarModule,
    FormsModule,
    MatProgressSpinnerModule,
    MatSelectModule
  ]
})
export class SharedModule { }
