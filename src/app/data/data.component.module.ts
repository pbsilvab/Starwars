import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicModule } from "@ionic/angular";
import { DataComponent } from './data.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        DataComponent,
    ],
    schemas:[ CUSTOM_ELEMENTS_SCHEMA ],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
  ],
    exports: [
        DataComponent,
    ]
})
export class DataComponentModule { }