import { Component, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ChargesComponent } from "./charges/charges.component";
import { DirectionsComponent } from "./directions/directions.component";
import { EquipmentListComponent } from "./equipment-list/equipment-list.component";
import { ExclusionsComponent } from "./exclusions/exclusions.component";
import { ExpertiseComponent } from "./expertise/expertise.component";
import { MaterialListComponent } from "./material-list/material-list.component";
import { MeasurementsComponent } from "./measurements/measurements.component";
import { PublicationsComponent } from "./publications/publications.component";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  tabsObj = {
    'Charges': false, 
    'Directions': false, 
    'Equipment': false, 
    'Exclusions': false, 
    'Expertise': false, 
    'Material List': false, 
    'Measurements': false, 
    'Publications': false
  };
  tabContainerShow: boolean = false;
  actionArr: string[] = ['Assemble', 'Cleaning', 'DER', 'Disassemble', 'Evaluate', 'Inspect', 'Part Out', 'QC', 'Receive', 'Shipping', 'Teardown', 'Test']
  actionAttributes = new FormControl();
  actionAttributesArr: string[] = ['Charges', 'Directions', 'Equipment', 'Exclusions', 'Expertise', 'Material List', 'Measurements', 'Publications']
  attributesForm: FormGroup;

  @ViewChild(ChargesComponent) chargesComp: ChargesComponent;
  @ViewChild(DirectionsComponent) directionsComp: DirectionsComponent;
  @ViewChild(EquipmentListComponent) equipmentListComp: EquipmentListComponent;
  @ViewChild(ExclusionsComponent) exclusionsComp: ExclusionsComponent;
  @ViewChild(ExpertiseComponent) expertiseComp: ExpertiseComponent;
  @ViewChild(MaterialListComponent) materialListComp: MaterialListComponent;
  @ViewChild(MeasurementsComponent) measurementsComp: MeasurementsComponent;
  @ViewChild(PublicationsComponent) publicationsComp: PublicationsComponent;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.attributesFormLoad();
  }
  attributesFormLoad(){
    this.attributesForm = this.fb.group({
      actions: [''],
      actionAttributes: ['']
    })
  }

  loadTabs(param){
    this.actionAttributesArr.forEach(element => {
      this.tabsObj[element] = false;
    });
    this.tabsObj
    param.value.forEach(element => {
      this.tabsObj[element] = true;
    });
    this.tabContainerShow = param.value.length > 0 ? true : false;    
  }

  saveData(){
    let allDataObj = [];
    allDataObj.push({'action': this.attributesForm.value.actions})
    this.chargesComp?allDataObj.push(this.chargesComp.getGridData()):null;
    this.directionsComp?allDataObj.push(this.directionsComp.getGridData()):null;
    this.equipmentListComp?allDataObj.push(this.equipmentListComp.getGridData()):null;
    this.exclusionsComp?allDataObj.push(this.exclusionsComp.getGridData()):null;
    this.expertiseComp?allDataObj.push(this.expertiseComp.getGridData()):null;
    this.materialListComp?allDataObj.push(this.materialListComp.getGridData()):null;
    this.measurementsComp?allDataObj.push(this.measurementsComp.getGridData()):null;
    this.publicationsComp?allDataObj.push(this.publicationsComp.getData()):null;
    console.log(allDataObj);
  }

  
  
}
