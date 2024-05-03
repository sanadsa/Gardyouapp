import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onEmailSignIn() {
    console.log('Email sign in');
  }

  onSMSSignIn() {
    console.log('SMS sign in');
  }

  onGoogleSignIn() {
    console.log('Google sign in');
  }

  onAppleSignIn() {
    console.log('Apple sign in');
  }

  logIn() {
    console.log('Log in');
  }

  skipLogin() {
    console.log('Skip login');
  }

}
