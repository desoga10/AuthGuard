import { Component, OnInit } from '@angular/core';
import { AuthserveService } from '../authserve.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginUserData = {};
  constructor(private _auth: AuthserveService, private _router: Router) {}

  ngOnInit() {}

  loginUsers() {
    this._auth.loginUser(this.loginUserData).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this._router.navigate(['/exclusive']);
      },
      error => console.log(error)
    );
  }
}
