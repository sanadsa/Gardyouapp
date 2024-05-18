import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  url = 'http://localhost:3000';

  constructor(private http: HttpClient) {
  }

  login(email: string, password: string) {
    return this.http.post(`${this.url}/login`, {email, password});
  }

  register(email: string, password: string) {
    return this.http.post(`${this.url}/register`, {email, password});
  }

  signInWithApple() {
    return this.http.get(`${this.url}/auth/apple`);
  }

  signInWithEmail(email: string) {
    return this.http.post(`${this.url}/auth/email`, {email});
  }

  signInWithSms(phone: string) {
    return this.http.post(`${this.url}/auth/phone`, {phone});
  }
}
