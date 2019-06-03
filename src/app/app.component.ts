import { Component } from '@angular/core';
import { AuthserveService } from '../app/authserve.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'guard';

  constructor(public _authservice: AuthserveService) {}
}
