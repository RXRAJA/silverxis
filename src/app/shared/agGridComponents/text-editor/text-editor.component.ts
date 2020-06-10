import { Component, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  template: `<mat-form-field class="example-full-width">
    <!-- <mat-label>{{params.headerName}}</mat-label> -->
    <input matInput #i [value]="params.value">
  </mat-form-field>`,
  styles: [
  ]
})
export class TextEditorComponent implements AfterViewInit {
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
