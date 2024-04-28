import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  errMessage:string = ""
  isLogin:boolean= false
  constructor( private AuthServics:AuthService , private _Router:Router ){}

  registerForms:FormGroup = new FormGroup({
    name: new FormControl('' , [Validators.required , Validators.minLength(3)]),
    email: new FormControl('' ,[Validators.required , Validators.email]),
    password: new FormControl('' ,[Validators.required , Validators.pattern(/^[A-Z][A-Za-z0-9]{6,16}$/)]),
    phone: new FormControl('' ,[Validators.required , Validators.pattern(/^(01)[0125][0-9]{8}$/)]),
    age: new FormControl('' ,[Validators.required]),
  })

  submitBtn(){
    this.isLogin = true
    this.AuthServics.signUpForm(this.registerForms.value).subscribe({
      next: data =>
      {
        this.isLogin =false
        this._Router.navigate(['signin'])
      },
      error : err =>{
      this.isLogin =false
       this.errMessage = err.error.msg
      }
    })
  }
}
