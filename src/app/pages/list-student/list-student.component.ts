import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../share/services/api.service';
import { Student } from './../../share/models/student';
import { StudentCollection } from './../../share/models/student-collection';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.scss']
})
export class ListStudentComponent implements OnInit {
  
  public student:Student;
  public studentCollection: StudentCollection;

  public displayedColumns:string[]=['id','nom','prenom','adresse','telephone','commande','status','supprimer','modifier'];

  public dataSource= null;


  public constructor(
    private api: ApiService,
    private toastrService: ToastrService,
    private router: Router // Inject the Router in that object
    ){
    this.studentCollection = new StudentCollection(this.toastrService,this.api);
    this.api.getAllStudents().subscribe((studentPoorList: any) => {
        const students: Array<any> = studentPoorList;

        // Euh Bulent, t'es sûr d'avoir des élèves ?
        if (!students.hasOwnProperty('httpStatus')){
          students.forEach((student: any) => {
            let aStudent: Student = (new Student())
              .setId(student.id)
              .setNom(student.nom)
              .setPrenom(student.prenom)
              .setAdresse(student.adresse)
              .setTelephone(student.telephone)
              .setCommande(student.commande)
              .setStatus(student.status);
            // Vas-y JL, range moi ça dans le casier
            this.studentCollection.add(aStudent);
          });

        }
        this.dataSource = this.studentCollection.toArray();

    });
    


  }

  public ngOnInit() {
    this.student = new Student();
  }

  public goAdd():void{
    this.router.navigate(['add']);
  }
  
  public goUpdate():void{
    this.router.navigate(['update']);
  }

  /**
   * Removes the selected student
   */
  public removeStudent(student: Student): void{
    console.log('Have to kill a student'+student.getId());
    this.studentCollection.remove(student.getId());
    this.router.navigate(['commande/livreur']);
  }

  public removeStu(){
    this.router.navigate(['commande/livreur/put']);
  }

  

}
