import { Component } from '@angular/core';

import { EventForm } from './data-model';

import { FormArray, FormBuilder, FormGroup } from '@angular/forms';






@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
eventProperty: EventForm; //Hero
  eventForm: FormGroup;

constructor(
private fb: FormBuilder){

  this.createForm();
}

createForm(){
  this.eventForm = this.fb.group({
    //type the formbuilder properties
    sportname:''
  });
}
  onSubmit(){
  this.eventProperty = this.prepareSaveHero();
}


  prepareSaveHero(): EventForm {
    const formModel = this.eventForm.value;

     const saveHero: EventForm = {
      sportType : formModel.sportname 
    }

    console.log (saveHero);
  
    return saveHero;


  }
    
}



  
 