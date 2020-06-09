import { Component, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-text-area-editor',
  template: `<mat-form-field class="example-full-width">
  <mat-label>{{params.headerName}}</mat-label>
  <textarea matInput  rows='1' #i [value]="params.value"></textarea>
  </mat-form-field> `,
  styles: [
  ]
})
export class TextAreaEditorComponent implements AfterViewInit {

  constructor() { }

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

}
