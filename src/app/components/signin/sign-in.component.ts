import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

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
    // navigate to the google sign in page
  }

  onAppleSignIn() {
    console.log('Apple sign in');
  }

  logIn() {
    console.log('Log in');
    this.router.navigate(['/login']);
  }

  skipLogin() {
    console.log('Skip login');
  }

}
