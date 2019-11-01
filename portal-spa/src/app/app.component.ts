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
      .get('/api/method/frappe.integrations.oauth2.openid_profile')
      .subscribe({
        next: (response: { given_name: string }) => {
          this.fullName = response.given_name;
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
