import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private _httpClient:HttpClient) { }

  getLiveMatches() {
    return this._httpClient.get(`${environment.apiUrl}/match`)    
  }
  getAllMatches() {
    return this._httpClient.get(`${environment.apiUrl}/match/live`)
  }
  getPointTable() {
    return this._httpClient.get(`${environment.apiUrl}/match/point-table`)
  }
}
