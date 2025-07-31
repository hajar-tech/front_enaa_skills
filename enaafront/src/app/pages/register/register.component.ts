import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AuthService, Utilisateur} from '../../core/auth/auth.service';
import {Root} from 'postcss';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit{
  registerForm! : FormGroup;

  constructor(private fb : FormBuilder , private authService : AuthService , private root : Router) {
  }
  ngOnInit(): void {
    this.registerForm = this.fb.group({
      fullname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      role: ['', Validators.required]
    });
  }



  onRegister():void{
    const user : Utilisateur = this.registerForm.value;

    this.authService.register(user).subscribe({
      next: res=> {console.log("user enregister avec succés");
        this.root.navigate(['/login']);
      },
      error : err => console.log('Erreur inscription', err)
    })

  }


}
