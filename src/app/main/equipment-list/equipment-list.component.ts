import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular, } from "ag-grid-angular";
import { NumericEditorComponent } from "../../shared/agGridComponents/numeric-editor/numeric-editor.component";
import { TextEditorComponent } from "../../shared/agGridComponents/text-editor/text-editor.component";
import { DeleteButtonRendererComponent } from "../../shared/agGridComponents/delete-button-renderer/delete-button-renderer.component";
import { ComboBoxComponent } from "../../shared/agGridComponents/combo-box/combo-box.component";

@Component({
  selector: 'app-equipment-list',
  templateUrl: './equipment-list.component.html',
  styleUrls: ['./equipment-list.component.scss']
})
export class EquipmentListComponent implements OnInit {
  @ViewChild('agGrid') agGrid: AgGridAngular;


  frameworkComponents = {
    numericEditorComponent: NumericEditorComponent,
    deleteButtonRenderer: DeleteButtonRendererComponent,
    comboBoxComponent: ComboBoxComponent,
    textEditorComponent: TextEditorComponent,
  };

  dataArr: any[];

  columnDefs = [
    {
      headerName: 'Item #',
      field: 'itemNo',
      editable: true,
      cellEditor:'comboBoxComponent',
      cellEditorParams: {
        values: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
        headerName: 'Item #',
      },
      sortable: true,
      filter: true,
      width: 250,
    },
    {
      headerName: 'Item Description',
      field: 'itemDescription',
      editable: true,
      cellEditor: 'textEditorComponent',
      cellEditorParams: {
        headerName: 'Item Description',
      },
      sortable: true,
      filter: true,
      width: 250,
    },
    {
      headerName: 'Item Classification',
      field: 'itemClassification',
      editable: true,
      cellEditor:'comboBoxComponent',
      cellEditorParams: {
        values: ['Item Class 1', 'Item Class 2', 'Item Class 3', 'Item Class 4'],
        headerName: 'Item Classification',
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
      { itemNo: '', itemDescription: '', itemClassification: '', quantity: '', action:null, }
  ];
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  getGridData(){
    this.dataArr = [];
    this.agGrid.api.forEachNode(node => this.dataArr.push(node.data));
    this.dataArr = this.dataArr.map(({ action, ...rest }) => rest);
    let dataObj = {
      actionAttribute: 'Equipment List',
      data: this.dataArr,
    }
    return dataObj;
  }
 
  addNewRow(){

    var transactions = {
      add: [{ itemNo: '', itemDescription: '', itemClassification: '', quantity:'', action:null, }],
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
