import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'portal-spa';
  fullName: string;

  constructor(private readonly http: HttpClient) {}

  ngOnInit() {
    this.http
      .get('/api/method/frappe.auth.get_logged_user')
      .subscribe({
        next: (response: { message: string }) => {
          this.fullName = response.message;
        },
        error: this.redirectToLogin,
      });
  }

  logout() {
    this.http.get('/api/method/logout').subscribe({
      next: this.redirectToLogin,
      error: this.redirectToLogin,
    });
  }

  redirectToLogin() {
    window.location.href = '/login?redirect-to=/portal_spa';
  }
}
