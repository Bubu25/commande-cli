import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/share/models/student';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ApiService } from 'src/app/share/services/api.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { StudentCollection } from './../../share/models/student-collection';

@Component({
  selector: 'app-get-student',
  templateUrl: './get-student.component.html',
  styleUrls: ['./get-student.component.scss']
})
export class GetStudentComponent implements OnInit {
  private student:Student;
  private studentForm:FormGroup;
  public studentCollection: StudentCollection;

  public displayedColumns:string[]=['id','nom','prenom','telephone','commande','adresse','status','supprimer','modifier'];

  public dataSource= null;

  public constructor(
    private api:ApiService,
    private fb: FormBuilder,
    private toastrService: ToastrService,
    private router:Router

  ) {}

  public get nom():AbstractControl{
    return this.studentForm.controls.nom;
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


      }
    );
  }


  public add(){
    // TODO : Loop over the controls to check white spaces

    this.student
      .setNom(this.nom.value)
      
    
    /*m:this.student.getNom()*/
    // From the fresh new student, just persist it
    this.studentCollection = new StudentCollection(this.toastrService,this.api);
    this.api.getoneCommande(this.nom.value).subscribe((studentPoorList: any) => {
        const students: Array<any> = studentPoorList;

        // Euh Bulent, t'es sûr d'avoir des élèves ?
        if (!students.hasOwnProperty('httpStatus')){
          students.forEach((student: any) => {
            let aStudent: Student = (new Student())
            .setId(student.id)
            .setNom(student.nom)
            .setPrenom(student.prenom)
            .setTelephone(student.telephone)
            .setCommande(student.commande)
            .setAdresse(student.adresse)
            .setStatus(student.status);
            // Vas-y JL, range moi ça dans le casier
            this.studentCollection.add(aStudent);
          });

        }
        this.dataSource = this.studentCollection.toArray();

    });
  }

}
