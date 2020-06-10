import { Component, OnInit, ViewChild, ElementRef, TemplateRef } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatOption } from "@angular/material/core";
import { MatSelect } from "@angular/material/select";
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
  allSelectedFlag = false;

  @ViewChild(ChargesComponent) chargesComp: ChargesComponent;
  @ViewChild(DirectionsComponent) directionsComp: DirectionsComponent;
  @ViewChild(EquipmentListComponent) equipmentListComp: EquipmentListComponent;
  @ViewChild(ExclusionsComponent) exclusionsComp: ExclusionsComponent;
  @ViewChild(ExpertiseComponent) expertiseComp: ExpertiseComponent;
  @ViewChild(MaterialListComponent) materialListComp: MaterialListComponent;
  @ViewChild(MeasurementsComponent) measurementsComp: MeasurementsComponent;
  @ViewChild(PublicationsComponent) publicationsComp: PublicationsComponent;
  @ViewChild('allSelected') private allSelected: MatOption;
  @ViewChild('actionAttributes') skillSel: MatSelect;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) { }

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
    if (this.publicationsComp) {
      if (this.publicationsComp.alertFlag) {
        this.openSnackBar('Workflow Saved', 'ok', 'success-snackbar');
      }
    }else{
      this.openSnackBar('Workflow Saved', 'ok', 'success-snackbar');
    }
  }

    openSnackBar(message: string, action: string, panelClass: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: [panelClass],
    });
  }
  
  toggleAllSelection() {
    this.allSelectedFlag = !this.allSelectedFlag;  // to control select-unselect
    
    if (this.allSelectedFlag) {
      this.skillSel.options.forEach( (item : MatOption) => item.select());
    } else {
      this.skillSel.options.forEach( (item : MatOption) => {item.deselect()});
    }
    this.skillSel.close();
  }
}
