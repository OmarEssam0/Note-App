import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  islogin:boolean = false
  errMsg:string = ""
  constructor(private _Auth:AuthService , private _Router:Router){}

  signIn:FormGroup = new FormGroup({
    email: new FormControl ('' , [Validators.required , Validators.email] ),
    password: new FormControl ('' , [Validators.required , Validators.pattern(/^[A-Z][A-Za-z0-9]{6,16}$/)]),
  })

  signInBtn(){
    this.islogin = true
    this._Auth.signInForm(this.signIn.value).subscribe({
      next: data => {
        this.islogin = false
        localStorage.setItem("token" , "3b8ny__"+data.token)
        this._Router.navigate(['/notes'])
      } ,
      error: err => {
        this.islogin = false
        this.errMsg = err.error.msg
      }
  })

  }
}

