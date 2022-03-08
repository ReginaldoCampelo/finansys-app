import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
 
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
    // shared modules
    CommonModule,
    ReactiveFormsModule
  ],
  declarations: [],
})
export class SharedModule { }
