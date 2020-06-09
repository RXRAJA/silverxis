import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular, } from "ag-grid-angular";
import { NumericEditorComponent } from "../../shared/agGridComponents/numeric-editor/numeric-editor.component";
import { TextEditorComponent } from "../../shared/agGridComponents/text-editor/text-editor.component";
import { DeleteButtonRendererComponent } from "../../shared/agGridComponents/delete-button-renderer/delete-button-renderer.component";
import { ComboBoxComponent } from "../../shared/agGridComponents/combo-box/combo-box.component";

@Component({
  selector: 'app-exclusions',
  templateUrl: './exclusions.component.html',
  styleUrls: ['./exclusions.component.scss']
})
export class ExclusionsComponent implements OnInit {
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
      headerName: 'EPN',
      field: 'epn',
      editable: true,
      cellEditor:'comboBoxComponent',
      cellEditorParams: {
        values: ['EPN 1', 'EPN 2', 'EPN 3', 'EPN 4'],
        headerName: 'EPN',
      },
      sortable: true,
      filter: true,
      width: 250,
    },
    {
      headerName: 'EPN Description',
      field: 'epnDescription',
      editable: true,
      cellEditor: 'textEditorComponent',
      cellEditorParams: {
        headerName: 'EPN Description',
      },
      sortable: true,
      filter: true,
      width: 250,
    },
    {
      headerName: 'Cost',
      field: 'cost',
      editable: true,
      cellEditor: 'numericEditorComponent',
      cellEditorParams: {
        headerName: 'Cost',
      },
      sortable: true,
      filter: true,
      width: 250,
    },
    {
      headerName: 'Notes',
      field: 'notes',
      editable: true,
      cellEditor: 'textEditorComponent',
      cellEditorParams: {
        headerName: 'Notes',
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
      { epn: '', epnDescription: '', cost: '', notes: '', action:null, }
  ];
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  getGridData(){
    this.dataArr = [];
    this.agGrid.api.forEachNode(node => this.dataArr.push(node.data));
    this.dataArr = this.dataArr.map(({ action, ...rest }) => rest);
    let dataObj = {
      actionAttribute: 'Exclusions',
      data: this.dataArr,
    }
    return dataObj;
  }
 
  addNewRow(){

    var transactions = {
      add: [{ epn: '', epnDescription: '', cost: '', notes: '', action:null, }],
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
