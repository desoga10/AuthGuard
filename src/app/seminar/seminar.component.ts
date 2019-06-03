import { Component, OnInit } from '@angular/core';
import { SeminarService } from '../seminar.service';

@Component({
  selector: 'app-seminar',
  templateUrl: './seminar.component.html',
  styleUrls: ['./seminar.component.css']
})
export class SeminarComponent implements OnInit {
  seminars = [];
  constructor(private _seminarService: SeminarService) {}

  ngOnInit() {
    this._seminarService
      .getSeminar()
      .subscribe(res => (this.seminars = res), error => console.log(error));
  }
}
