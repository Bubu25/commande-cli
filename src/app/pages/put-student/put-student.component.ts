import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/share/models/student';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ApiService } from 'src/app/share/services/api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-put-student',
  templateUrl: './put-student.component.html',
  styleUrls: ['./put-student.component.scss']
})
export class PutStudentComponent implements OnInit {
  private student:Student;
  private studentForm:FormGroup;

  constructor(
    private api:ApiService,
    private fb: FormBuilder,
    private router:Router

  ) {}

  public get id():AbstractControl{
    return this.studentForm.controls.id;
  }
  public get status():AbstractControl{
    return this.studentForm.controls.status;
  }
 

  ngOnInit() {
    this.student = new Student();
    this.studentForm = this.fb.group(
      {
          id: [
            '',
            Validators.compose(//Plusieurs validateurs
              [
                Validators.required,
                Validators.minLength(1)
              ]
            )
          ],

          status: [
            '',
            Validators.compose(//Plusieurs validateurs
              [
                Validators.required,
                Validators.minLength(1)
              ]
            )
          ]
          

      }
    );
  }

  public add(){
    // TODO : Loop over the controls to check white spaces

    this.student
      .setId(this.id.value)
      .setStatus(this.status.value)
       
    this.api.put(this.student).subscribe(()=>{
      this.router.navigate(['commande/livreur']);
      });
  }




}
