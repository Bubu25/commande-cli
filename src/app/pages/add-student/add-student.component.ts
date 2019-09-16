import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/share/models/student';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ApiService } from 'src/app/share/services/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
  private student:Student;
  private studentForm:FormGroup;

  
  constructor(
    private api:ApiService,
    private fb: FormBuilder,
    private router:Router
    ) {}

  public get nom():AbstractControl{
    return this.studentForm.controls.nom;
  }
  public get prenom():AbstractControl{
    return this.studentForm.controls.prenom;
  }
  
  public get adresse():AbstractControl{
    return this.studentForm.controls.adresse;
  
  }
  public get telephone():AbstractControl{
    return this.studentForm.controls.telephone;
  }

  public get commande():AbstractControl{
    return this.studentForm.controls.commande;
  }

  ngOnInit() {
    this.student = new Student();
    this.studentForm = this.fb.group(
      {
          nom: [
            '',
            Validators.compose(//Plusieurs validateurs
              [
                Validators.required,
                Validators.minLength(2)
              ]
            )
          ],

          prenom: [
            '',
            Validators.compose(//Plusieurs validateurs
              [
                Validators.required,
                Validators.minLength(2)
              ]
            )
          ],
          

          adresse: [
            '',
            Validators.compose(//Plusieurs validateurs
              [
                Validators.required,
                Validators.minLength(2)
              ]
            )
          ],

          
          telephone: [
            '',
            Validators.compose(//Plusieurs validateurs
              [
                Validators.required,
                Validators.minLength(2)
              ]
            )
          ],

          commande: [
            '',
            Validators.compose(//Plusieurs validateurs
              [
                Validators.required,
                Validators.minLength(2)
              ]
            )
          ]
      }
    );
  }

  public add(){
    // TODO : Loop over the controls to check white spaces

    this.student
      .setNom(this.nom.value)
      .setPrenom(this.prenom.value)
      .setAdresse(this.adresse.value)
      .setTelephone(this.telephone.value)
      .setCommande(this.commande.value)

    // From the fresh new student, just persist it
    this.api.add(this.student).subscribe(()=>{
      this.router.navigate(['commande/nomClient']);
    });
  }

}
