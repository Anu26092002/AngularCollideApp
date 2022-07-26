import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  registrationForm !: FormGroup;
  constructor(private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.registrationForm = this.formBuilder.group({
      firstName: ['',Validators.required],
      lastName: ['',Validators.required],
      collegeName: ['',Validators.required],
      city: ['',Validators.required],
      state: ['',Validators.required],
      dance: false,
      music: false,
      drawing: false,
      esports: false
    })
  }

  addProduct() {
    console.log(this.registrationForm.value);
    // console.log(this.registrationForm.value['city']);
  }

}
