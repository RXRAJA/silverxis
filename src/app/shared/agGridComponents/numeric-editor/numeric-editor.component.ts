import { Component, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-numeric-editor',
  template: `<mat-form-field class="example-full-width">
    <mat-label>{{params.headerName}}</mat-label>
    <input matInput #i [value]="params.value" (keypress)="onKeyPress($event)" (keydown)="onKeyDown($event)">
  </mat-form-field>`,
})
export class NumericEditorComponent implements AfterViewInit {
  @ViewChild('i') textInput;
  params;

  ngAfterViewInit() {
    setTimeout(() => {
      this.textInput.nativeElement.focus();
    });
  }

  agInit(params: any): void {
    this.params = params;
  }

  getValue() {
    return this.textInput.nativeElement.value;
  }

  onKeyPress(event) {
    if (!isNumeric(event)) {
      event.preventDefault();
    }

    function isNumeric(ev) {
      return /[\d\.]/.test(ev.key);
    }
  }

  onKeyDown(event) {
    if (event.keyCode === 39 || event.keyCode === 37 || event.keyCode === 110 || event.keyCode === 110) {
      event.stopPropagation();
    }
  }

}
