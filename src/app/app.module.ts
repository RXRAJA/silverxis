import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from "./angular-material/angular-material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AgGridModule } from "ag-grid-angular";

import { MainComponent } from './main/main.component';
import { ExpertiseComponent } from './main/expertise/expertise.component';
import { NumericEditorComponent } from './shared/agGridComponents/numeric-editor/numeric-editor.component';
import { DeleteButtonRendererComponent } from './shared/agGridComponents/delete-button-renderer/delete-button-renderer.component';
import { ComboBoxComponent } from './shared/agGridComponents/combo-box/combo-box.component';
import { ChargesComponent } from './main/charges/charges.component';
import { DirectionsComponent } from './main/directions/directions.component';
import { TextEditorComponent } from './shared/agGridComponents/text-editor/text-editor.component';
import { TextAreaEditorComponent } from './shared/agGridComponents/text-area-editor/text-area-editor.component';
import { ExclusionsComponent } from './main/exclusions/exclusions.component';
import { MaterialListComponent } from './main/material-list/material-list.component';
import { MeasurementsComponent } from './main/measurements/measurements.component';
import { EquipmentListComponent } from './main/equipment-list/equipment-list.component';
import { PublicationsComponent } from './main/publications/publications.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    ExpertiseComponent,
    NumericEditorComponent,
    DeleteButtonRendererComponent,
    ComboBoxComponent,
    ChargesComponent,
    DirectionsComponent,
    TextEditorComponent,
    TextAreaEditorComponent,
    ExclusionsComponent,
    MaterialListComponent,
    MeasurementsComponent,
    EquipmentListComponent,
    PublicationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule,
    ReactiveFormsModule,
    AgGridModule.withComponents([]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
