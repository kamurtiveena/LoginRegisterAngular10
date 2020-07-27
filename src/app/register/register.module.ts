import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RegisterComponent } from './register.component';
import { CommonModule } from '@angular/common';
import { RegisterRoutingModule } from './register.routing';
@NgModule({
    declarations: [
        RegisterComponent
    ],
    imports: [
        CommonModule,
        RegisterRoutingModule
    ],
    providers: [],
    bootstrap: [RegisterComponent]
})
export class RegisterModule { }
