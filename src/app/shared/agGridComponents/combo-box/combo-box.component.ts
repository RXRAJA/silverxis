import { Component, AfterViewInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-combo-box',
  templateUrl: './combo-box.component.html',
  styles: [
  ]
})
export class ComboBoxComponent implements AfterViewInit {
  @ViewChild('i') textInput;
  params;

  constructor() { }

  ngAfterViewInit() {
    setTimeout(() => {
      this.textInput.focus();
    });
  }

  agInit(params: any): void {
    this.params = params;
  }
  getValue() {
    return this.textInput.value;
  }

}
