import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-delete-button-renderer',
  template: '<button mat-icon-button color="accent" aria-label="Icon button with a Delete icon" type="submit" (click)="onClick($event)"><mat-icon >delete</mat-icon></button>',
})
export class DeleteButtonRendererComponent implements OnInit {

  params;
  label: string;

  agInit(params): void {
    this.params = params;
    this.label = this.params.label || null;
  }

  refresh(params?: any): boolean {
    return true;
  }

  onClick($event) {
    if (this.params.onClick instanceof Function) {
      // put anything into params u want pass into parents component
      const params = {
        event: $event,
        rowData: this.params.node.data
        // ...something
      }
      this.params.onClick(params);

    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
