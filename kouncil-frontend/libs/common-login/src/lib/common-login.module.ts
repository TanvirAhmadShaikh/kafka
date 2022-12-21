import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CommonLoginComponent} from "./login/common-login.component";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  declarations: [
    CommonLoginComponent
  ],
  exports: [
    CommonLoginComponent
  ]
})
export class CommonLoginModule {
}