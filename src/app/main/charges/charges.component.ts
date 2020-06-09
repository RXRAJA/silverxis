import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular, } from "ag-grid-angular";
import { NumericEditorComponent } from "../../shared/agGridComponents/numeric-editor/numeric-editor.component";
import { DeleteButtonRendererComponent } from "../../shared/agGridComponents/delete-button-renderer/delete-button-renderer.component";
import { ComboBoxComponent } from "../../shared/agGridComponents/combo-box/combo-box.component";

@Component({
  selector: 'app-charges',
  templateUrl: './charges.component.html',
  styleUrls: ['./charges.component.scss']
})
export class ChargesComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridAngular;


  frameworkComponents = {
    numericEditorComponent: NumericEditorComponent,
    deleteButtonRenderer: DeleteButtonRendererComponent,
    comboBoxComponent: ComboBoxComponent
  };

  dataArr: any[];

  columnDefs = [
    {
      headerName: 'Type',
      field: 'type',
      editable: true,
      cellEditor:'comboBoxComponent',
      cellEditorParams: {
        values: ['Type 1', 'Type 2', 'Type 3', 'Type 4'],
        headerName: 'Type',
      },
      sortable: true,
      filter: true,
      width: 250,
    },
    {
      headerName: 'Qty',
      field: 'quantity',
      editable: true,
      cellEditor: 'numericEditorComponent',
      cellEditorParams: {
        headerName: 'Qty',
      },
      sortable: true,
      filter: true,
      width: 250,
    },
    {
      headerName: 'Unit Cost',
      field: 'unitCost',
      editable: true,
      cellEditor: 'numericEditorComponent',
      cellEditorParams: {
        headerName: 'Unit Cost',
      },
      sortable: true,
      filter: true,
      width: 250,
    },
    {
      headerName: 'Extended Cost',
      field: 'extendedCost',
      editable: true,
      cellEditor: 'numericEditorComponent',
      cellEditorParams: {
        headerName: 'Extended Cost',
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
    { type: '', quantity: '', unitCost: '', extendedCost:'', action:null, }
  ];
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  getGridData(){
    this.dataArr = [];
    this.agGrid.api.forEachNode(node => this.dataArr.push(node.data));

    this.dataArr = this.dataArr.map(({ action, ...rest }) => rest);
    let dataObj = {
      actionAttribute: 'Charges',
      data: this.dataArr,
    }
    return(dataObj);
  }
 
  addNewRow(){

    var transactions = {
      add: [{ type: '', quantity: '', unitCost: '', extendedCost:'', action:null, }],
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
