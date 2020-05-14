import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})


export class LoginPageComponent implements OnInit {


//   loginData = {
//  'username': String,
//  'password': String
// };
  loginForm = new FormGroup({
    username: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required])
  })
  invalidLogin: boolean = false;

  get username(): any { return this.loginForm.get('username')}
  get password(): any { return this.loginForm.get('password')}

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  userName :any;
  userpass :any;


  getUsernameErrorMessage(){
    return this.username.hasError('required') ? 'You must enter a username' : '';
  }
  getPasswordErrorMessage(){
    return this.password.hasError('required') ? 'You must enter a password': ''
  }

  login = () => {
    if(this.loginForm.valid){
      var name = this.username;
      var  userPassword = this.password;
      console.log(name.value);
      console.log(userPassword.value);
      if(name.value == "sumit" && userPassword.value =="sumit"){
        this.router.navigate(['/dashboard']);
      }
      else{
        this.invalidLogin = true;
        //alert("Invalid Name or Password")
        setTimeout(()=>{
            this.invalidLogin = false;
          },2000);
        }
    }
  }

}
