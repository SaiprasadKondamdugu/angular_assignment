import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path:'', component: LoginComponent },
  { path: 'admin',loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  { path: 'student',loadChildren: () => import('./student/student.module').then(m => m.StudentModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
