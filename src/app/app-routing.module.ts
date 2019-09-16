import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddStudentComponent } from './pages/add-student/add-student.component';
import { ListStudentComponent } from './pages/list-student/list-student.component';
import { GetStudentComponent } from './pages/get-student/get-student.component';
import { PutStudentComponent } from './pages/put-student/put-student.component';

const routes: Routes = [
  {
    path:'commande/livreur', component:ListStudentComponent
  },
  {
    path:'commande/livreur/put', component:PutStudentComponent
  },

  {
    path:'commande', component:AddStudentComponent
  },
  {
    path:'commande/nomClient', component:GetStudentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
