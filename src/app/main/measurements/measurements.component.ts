import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular, } from "ag-grid-angular";
import { NumericEditorComponent } from "../../shared/agGridComponents/numeric-editor/numeric-editor.component";
import { TextEditorComponent } from "../../shared/agGridComponents/text-editor/text-editor.component";
import { TextAreaEditorComponent } from "../../shared/agGridComponents/text-area-editor/text-area-editor.component";
import { DeleteButtonRendererComponent } from "../../shared/agGridComponents/delete-button-renderer/delete-button-renderer.component";
import { ComboBoxComponent } from "../../shared/agGridComponents/combo-box/combo-box.component";

@Component({
  selector: 'app-measurements',
  templateUrl: './measurements.component.html',
  styleUrls: ['./measurements.component.scss']
})
export class MeasurementsComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridAngular;


  frameworkComponents = {
    numericEditorComponent: NumericEditorComponent,
    deleteButtonRenderer: DeleteButtonRendererComponent,
    comboBoxComponent: ComboBoxComponent,
    textEditorComponent: TextEditorComponent,
    textAreaEditorComponent: TextAreaEditorComponent,
  };

  dataArr: any[];

  columnDefs = [
    {
      headerName: 'Measurement ID',
      field: 'measurementId',
      editable: true,
      cellEditor:'textEditorComponent',
      cellEditorParams: {
        headerName: 'Measurement ID',
      },
      sortable: true,
      filter: true,
      width: 260,
    },
    {
      headerName: 'Measurement Name',
      field: 'measurementName',
      editable: true,
      cellEditor: 'textEditorComponent',
      cellEditorParams: {
        headerName: 'Measurement Name',
      },
      sortable: true,
      filter: true,
      width: 260,
    },
    {
      headerName: 'Sequence',
      field: 'sequence',
      editable: true,
      cellEditor: 'numericEditorComponent',
      cellEditorParams: {
        headerName: 'Sequence',
      },
      sortable: true,
      filter: true,
      width: 260,
    },
    {
      headerName: 'Description',
      field: 'description',
      editable: true,
      cellEditor: 'textAreaEditorComponent',
      cellEditorParams: {
        headerName: 'Description',
      },
      sortable: true,
      filter: true,
      width: 260,
    },
    {
      headerName: 'Action',
      field: 'action',
      cellRenderer: 'deleteButtonRenderer',
      cellRendererParams: {
        onClick: this.deleteRow.bind(this),
        label: 'Delete'
      },
      width: 80,
    }
  ];

  rowData = [
      { measurementId: '', measurementName: '', sequence: '', description: '', action:''}
  ];
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  getGridData(){
    this.dataArr = [];
    this.agGrid.api.forEachNode(node => this.dataArr.push(node.data));
    this.dataArr = this.dataArr.map(({ action, ...rest }) => rest);
    let dataObj = {
      actionAttribute: 'Measurements',
      data: this.dataArr,
    }
    return dataObj;
  }

  addNewRow(){

    var transactions = {
      add: [{ measurementId: '', measurementName: '', sequence: '', description: '', action:''}],
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
