import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SeminarService {
  private _seminarUrl = 'http://localhost:3000/api/seminar';
  private _exclusiveUrl = 'http://localhost:3000/api/exclusive';

  constructor(private http: HttpClient) {}

  getSeminar() {
    return this.http.get<any>(this._seminarUrl);
  }
  getExclusive() {
    return this.http.get<any>(this._exclusiveUrl);
  }
}
