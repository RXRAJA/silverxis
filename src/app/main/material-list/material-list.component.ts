import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular, } from "ag-grid-angular";
import { NumericEditorComponent } from "../../shared/agGridComponents/numeric-editor/numeric-editor.component";
import { TextEditorComponent } from "../../shared/agGridComponents/text-editor/text-editor.component";
import { DeleteButtonRendererComponent } from "../../shared/agGridComponents/delete-button-renderer/delete-button-renderer.component";
import { ComboBoxComponent } from "../../shared/agGridComponents/combo-box/combo-box.component";

@Component({
  selector: 'app-material-list',
  templateUrl: './material-list.component.html',
  styleUrls: ['./material-list.component.scss']
})
export class MaterialListComponent implements OnInit {
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
      headerName: 'PN',
      field: 'pn',
      editable: true,
      cellEditor:'comboBoxComponent',
      cellEditorParams: {
        values: ['DFRG03652158', 'DFDU03782159', 'DFTR06952160', 'DFWQ05689461'],
        headerName: 'PN',
      },
      sortable: true,
      width: 100,
    },
    {
      headerName: 'Description',
      field: 'description',
      editable: true,
      cellEditor: 'textEditorComponent',
      cellEditorParams: {
        headerName: 'Description',
      },
      sortable: true,
      width: 150,
    },
    {
      headerName: 'Item Classification',
      field: 'itemClassification',
      editable: true,
      cellEditor:'comboBoxComponent',
      cellEditorParams: {
        values: ['It Class 1', 'It Class 2', 'It Class 3', 'It Class 4'],
        headerName: 'Item Classification',
      },
      sortable: true,
      width: 150,
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
      width: 90,
    },
    {
      headerName: 'UOM',
      field: 'uom',
      editable: true,
      cellEditor:'comboBoxComponent',
      cellEditorParams: {
        values: ['kg', 'pound', 'mg', 'meter'],
        headerName: 'UOM',
      },
      sortable: true,
      width: 90,
    },
    {
      headerName: 'Condition',
      field: 'condition',
      editable: true,
      cellEditor:'comboBoxComponent',
      cellEditorParams: {
        values: ['AR', 'BR', 'CR', 'DR'],
        headerName: 'Condition',
      },
      sortable: true,
      width: 120,
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
      width: 100,
    },
    {
      headerName: 'Ext. Cost',
      field: 'extCost',
      editable: true,
      cellEditor: 'numericEditorComponent',
      cellEditorParams: {
        headerName: 'Ext. Cost',
      },
      sortable: true,
      width: 90,
    },
    {
      headerName: 'Provision',
      field: 'provision',
      editable: true,
      cellEditor:'comboBoxComponent',
      cellEditorParams: {
        values: ['Provision 1', 'Provision 2', 'Provision 3', 'Provision 4'],
        headerName: 'Provision',
      },
      sortable: true,
      width: 120,
    },
    {
      headerName: 'Deferred',
      field: 'deferred',
      editable: true,
      cellEditor:'comboBoxComponent',
      cellEditorParams: {
        values: ['Deferred 1', 'Deferred 2', 'Deferred 3', 'Deferred 4'],
        headerName: 'Deferred',
      },
      sortable: true,
      width: 120,
    },
    {
      headerName: 'Figure ID',
      field: 'figureId',
      editable: true,
      cellEditor: 'textEditorComponent',
      cellEditorParams: {
        headerName: 'Figure ID',
      },
      sortable: true,
      width: 100,
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
      { pn: '', description: '', itemClassification: '', quantity: '', uom: '', condition: '', unitCost: '', extCost: '', provision: '', deferred: '', figureId: '', action:null, }
  ];
  
  constructor() { }
  
  ngOnInit(): void {
  }
  
  getGridData(){
    this.dataArr = [];
    this.agGrid.api.forEachNode(node => this.dataArr.push(node.data));
    this.dataArr = this.dataArr.map(({ action, ...rest }) => rest);
    let dataObj = {
      actionAttribute: 'Material List',
      data: this.dataArr,
    }
    return dataObj;
  }
 
  addNewRow(){

    var transactions = {
      add: [{ pn: '', description: '', itemClassification: '', quantity: '', uom: '', condition: '', unitCost: '', extCost: '', provision: '', deferred: '', figureId: '', action:null, }],
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
