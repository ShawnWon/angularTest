import { Component, OnInit } from '@angular/core';
import { Registration } from 'src/app/models/register';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  model: Registration;
  nationalities = [{name:"Singaporean",code:"SG"},{name:"Indian",code:"IND"},{name:"Indonesian",code:"IN"}]
  constructor() { 
    this.model = new Registration('','','F','','','','','');
  }

  ngOnInit(): void {
  }

  onSubmit(){
    console.log("Submit!");
    console.log(this.model.address);
  }

  resetForm(){
    this.model = new Registration('','','F','','','','','');
  }
}
