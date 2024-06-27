import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logedIn = signal<any>(null);

  login() {
    try {
      localStorage.setItem('access_token', "token");
    } catch { }

    this.logedIn.set(true);
  }

  logout() {
    try {
      localStorage.removeItem('access_token');
    } catch { }

    this.logedIn.set(null);
  }
}
