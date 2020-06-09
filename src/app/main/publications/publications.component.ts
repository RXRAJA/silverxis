import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators,FormControl } from "@angular/forms";

@Component({
  selector: 'app-publications',
  templateUrl: './publications.component.html',
  styleUrls: ['./publications.component.scss']
})
export class PublicationsComponent implements OnInit {

  publicationsForm: FormGroup;
  revisionCheck: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.loadPublicationsForm();
  }

  loadPublicationsForm(){
    this.publicationsForm = this.fb.group({
      entryDate: [''],
      action: [''],
      publicationId: [''],
      publicationDescription: [''],
      publicationType: [''],
      author: [''],
      publishedBy: [''],
      aircraftManufacturer: [''],
      model: [''],
      ataChapter: [''],
      ataSubChapter: [''],
      ataPosition: [''],
      location: [''],
      revision: [false],
      verifiedBy: [''],
      nextReviewDate: [''],
      expirationDate: [''],
      employee: [''],
      revisionDate: [''],
      status: [''],
      expired: [''],
    })

  }

  onSubmit(data){
    console.log(data);
    
  }
  revisionChange(data){
    console.log(data);
    
  }

  getData(){
    console.log(this.publicationsForm.value);
    
  }

}
