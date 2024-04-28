import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NotesComponent } from './pages/notes/notes.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { urlGuardGuard } from './url-guard.guard';

const routes: Routes = [
  {path:"", redirectTo:"signin" , pathMatch:"full"},
  {path:"signin" , component:SigninComponent , title:"note-signin"},
  {path:"signup" , component:SignupComponent , title:"note-signup"},
  {path:"notes" , component:NotesComponent , canActivate: [urlGuardGuard] , title:"notes"},
  {path:"**" , component:NotfoundComponent , title:"not-found-page"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
