import { NgModule } from "@angular/core";
import { MaterialModule } from "../material/material.module";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

@NgModule({
    exports: [
        CommonModule, MaterialModule, FormsModule, ReactiveFormsModule, RouterModule
    ]
})
export class BaseModule { }