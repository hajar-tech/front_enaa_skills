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
      nom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      typeUtilisateur: ['', Validators.required]
    });
  }



  onRegister():void{
    if(this.registerForm.valid){
      console.log('Formulaire :', this.registerForm.value);

      const user : Utilisateur = {
        nom: this.registerForm.value.nom,
        email: this.registerForm.value.email,
        password: this.registerForm.value.password,
        typeUtilisateur: this.registerForm.value.typeUtilisateur
      };

      this.authService.register(user).subscribe({
        next: (res : string )=> {console.log("user enregister avec succés" , res);
          this.root.navigate(['/login']);
        },
        error : err => {console.log('Erreur inscription', err);
        alert("Une erreur s'est produite lors de l'inscription.");}
      })
    }else{
      console.log("formulaire invalide !");
    }


  }


}
