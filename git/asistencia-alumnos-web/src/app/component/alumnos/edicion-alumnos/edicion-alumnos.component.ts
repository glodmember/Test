import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-edicion-alumnos',
  templateUrl: './edicion-alumnos.component.html',
  styleUrls: ['./edicion-alumnos.component.css']
})
export class EdicionAlumnosComponent implements OnInit {

  angForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit() {}

  private createForm() {
    this.angForm = this.fb.group(
      {
        name: ['', Validators.required]
      }
    );
  }

}
