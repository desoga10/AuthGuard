import { Component, OnInit } from '@angular/core';
import { AuthserveService } from '../authserve.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(public _auth: AuthserveService, public _router: Router) {}

  registerUserData = {};
  ngOnInit() {}

  registerUsers() {
    this._auth.registerUser(this.registerUserData).subscribe(
      res => {
        console.log(res);
        localStorage.setItem('token', res.token);
        this._router.navigate(['/exclusive']);
      },
      error => console.log(error)
    );
  }
}
