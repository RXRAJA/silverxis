import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators,FormControl } from "@angular/forms";
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {

  publicationsForm: FormGroup;
  isSubmitted: boolean = false;
  alertFlag: boolean = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.loadPublicationsForm();
  }

  loadPublicationsForm(){
    this.publicationsForm = this.fb.group({
      entryDate: ['', Validators.required],
      action: ['', Validators.required],
      publicationId: ['', Validators.required],
      publicationDescription: ['', Validators.required],
      publicationType: ['', Validators.required],
      author: ['', Validators.required],
      publishedBy: ['', Validators.required],
      aircraftManufacturer: ['', Validators.required],
      model: ['', Validators.required],
      ataChapter: ['', Validators.required],
      ataSubChapter: ['', Validators.required],
      ataPosition: ['', Validators.required],
      location: ['', Validators.required],
      revision: [false],
      verifiedBy: ['', Validators.required],
      nextReviewDate: ['', Validators.required],
      expirationDate: ['', Validators.required],
      employee: ['', Validators.required],
      revisionDate: ['', Validators.required],
      status: ['', Validators.required],
      expired: [false],
    })

  }

  onSubmit(data){
    console.log(data);
    
  }

  getData(){
    this.isSubmitted = true;
    if (this.publicationsForm.invalid) {
      this.openSnackBar('Fill All Fields In Publication Form', 'ok', 'error-snackbar');
      return false;
    } else {
      this.alertFlag = true;
      return this.publicationsForm.value;
    }
  }

  public hasError = (controlName: string, errorName: string) =>{
    return this.publicationsForm.controls[controlName].hasError(errorName);
  }

  openSnackBar(message: string, action: string, panelClass: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
      horizontalPosition: 'end',
      verticalPosition: 'top',
      panelClass: [panelClass],
    });
  }

}
