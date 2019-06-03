import { Component, OnInit } from '@angular/core';
import { SeminarService } from '../seminar.service';
import { Router } from '@angular/router'
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-exclusive',
  templateUrl: './exclusive.component.html',
  styleUrls: ['./exclusive.component.css']
})
export class ExclusiveComponent implements OnInit {
  exclusive = [];
  constructor(private _exclusiveService: SeminarService, private _router: Router) {}

  ngOnInit() {
    this._exclusiveService
      .getExclusive()
      .subscribe(res => (this.exclusive = res), error => { 
        if(error instanceof HttpErrorResponse) {
          if(error.status === 401) {
            this._router.navigate(['/login'])
          }
        }
      })
  }

}

