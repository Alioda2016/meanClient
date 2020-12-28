import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Country } from '../models/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private country: Country;
  private baseUri: string = "http://localhost:8080";
  constructor(private http: HttpClient) { }

  createCountry(country: Country){
    return this.http.post(this.baseUri+'/create', country);
  }

  readCountries(){
    return this.http.get(this.baseUri+'/read');
  }

  updateCountry(country: Country){
    return this.http.put(this.baseUri+'/update', country);
  }

  deleteCountry(id: any){
    return this.http.delete(this.baseUri+'/delete/'+id);
  }

  setter(country: Country){
    this.country = country;
  }
  getter(){
    return this.country;
  }
}
