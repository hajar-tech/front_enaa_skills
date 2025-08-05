import { Component } from '@angular/core';
import {Route, Router, RouterLink} from '@angular/router';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService, loginRequest} from '../../core/auth/auth.service';

@Component({
  selector: 'app-login',
  imports: [
    RouterLink,
    ReactiveFormsModule,


  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private fb : FormBuilder , private service : AuthService , private  root : Router) {
    this.loginForm = this.fb.group({
      email :['',[Validators.required , Validators.email]],
      password :['',Validators.required]
    })
  }
  loginForm! : FormGroup;

  onLogin() : void{
    if (this.loginForm.valid){
      const loginData :loginRequest = this.loginForm.value;
      this.service.login(loginData).subscribe({
        next : (data)=>{
          console.log("login valide" , data);
          localStorage.setItem("token",data.token);
          localStorage.setItem("userId",data.userId.toString());
          localStorage.setItem("email" , data.email);
          localStorage.setItem("role" , data.role);


          switch (data.role.toLowerCase()){
            case 'admin':
              this.root.navigate(['/register']);
              break;

            case 'formateur':
              this.root.navigate(['/register']);
              break;

            case 'apprenant' :
              this.root.navigate(['/rendu']);
              break;

            default:
              this.root.navigate(['/']);

          }

        },
        error : err => {
          console.log("login failed",err);
          alert("email or password invalide!")
        }
      })
    }else {
      console.log("formulaire invalide!")
    }
  }


}
