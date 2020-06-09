import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular, } from "ag-grid-angular";
import { NumericEditorComponent } from "../../shared/agGridComponents/numeric-editor/numeric-editor.component";
import { DeleteButtonRendererComponent } from "../../shared/agGridComponents/delete-button-renderer/delete-button-renderer.component";
import { ComboBoxComponent } from "../../shared/agGridComponents/combo-box/combo-box.component";

@Component({
  selector: 'app-expertise',
  templateUrl: './expertise.component.html',
  styleUrls: ['./expertise.component.scss']
})
export class ExpertiseComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridAngular;


  frameworkComponents = {
    numericEditorComponent: NumericEditorComponent,
    deleteButtonRenderer: DeleteButtonRendererComponent,
    comboBoxComponent: ComboBoxComponent
  };

  dataArr: any[];

  columnDefs = [
    {
      headerName: 'Expertise Type',
      field: 'expertiseType',
      editable: true,
      cellEditor:'comboBoxComponent',
      cellEditorParams: {
        values: ['ET1', 'ET2', 'ET3', 'ET4'],
        headerName: 'Expertise Type',
      },
      sortable: true,
      filter: true,
      width: 250,
    },
    {
      headerName: 'Estimated Hours',
      field: 'estimatedHours',
      editable: true,
      cellEditor: 'numericEditorComponent',
      cellEditorParams: {
        headerName: 'Estimated Hours',
      },
      sortable: true,
      filter: true,
      width: 250,
    },
    {
      headerName: 'Standard Rate',
      field: 'standardRate',
      editable: true,
      cellEditor: 'numericEditorComponent',
      cellEditorParams: {
        headerName: 'Standard Rate',
      },
      sortable: true,
      filter: true,
      width: 250,
    },
    {
      headerName: 'Estimated Cost',
      field: 'estimatedCost',
      editable: true,
      cellEditor: 'numericEditorComponent',
      cellEditorParams: {
        headerName: 'Estimated Cost',
      },
      sortable: true,
      filter: true,
      width: 250,
    },
    {
      headerName: 'Action',
      field: 'action',
      cellRenderer: 'deleteButtonRenderer',
      cellRendererParams: {
        onClick: this.deleteRow.bind(this),
        label: 'Delete'
      },
      width: 150,
    }
  ];

  rowData = [
      { expertiseType: '', estimatedHours: '', standardRate: '', estimatedCost: '', action:null, }
  ];
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  getGridData(){
    this.dataArr = [];
    this.agGrid.api.forEachNode(node => this.dataArr.push(node.data));
    this.dataArr = this.dataArr.map(({ action, ...rest }) => rest);
    let dataObj = {
      actionAttribute: 'Expertise',
      data: this.dataArr,
    }
    return dataObj;
  }
 
  addNewRow(){

    var transactions = {
      add: [{ expertiseType: '', estimatedHours: '', standardRate: '', estimatedCost:'', action:null, }],
    }
    this.agGrid.api.applyTransaction(transactions);
  }

  deleteRow(e){
    var transactions = {
      remove: [e.rowData],
    }
    this.agGrid.api.applyTransaction(transactions);
  }

}
