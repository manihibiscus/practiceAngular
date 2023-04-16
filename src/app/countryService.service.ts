import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class CountryServiceService {

private apiUrl = 'http://localhost:3000/';

  constructor(private http: HttpClient) {}

  getCountries() {
    return this.http.get(this.apiUrl+'countries');
  }

  getStatesByCountry(country: string) {
    return this.http.get(`this.apiUrl}/states?country=${country}`);
  }

}
