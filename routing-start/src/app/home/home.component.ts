import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedIn = false;
  constructor(private router: Router, private authServie: AuthService) { }

  ngOnInit() {
  }

  onLoadServer(id: number) {
    this.router.navigate(['/servers', id, 'edit'], { queryParams: { allowEdit: '1' }, fragment: 'loading' });
  }
  onLogin() {
    this.authServie.login();
    this.loggedIn = this.authServie.loggedIn;
  }

  onLogout() {
    this.authServie.logout();
    this.loggedIn = this.authServie.loggedIn;
  }

}
