import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class CallsService {

  excahngeurl = 'https://api.exchangeratesapi.io/latest?base=USD';
  dogfoodurl = 'https://devapi.000webhostapp.com/dogfood/';



  /**
   * Constructor of the Service with Dependency Injection
   * @param http The standard Angular HttpClient to make requests
   */
  constructor(private http: HttpClient) { }
 
  getExchange(): Observable<any> {
    
    return this.http.get(`${this.excahngeurl}`);
    
  }


  getDogFood(): Observable<any> {
    const params = {};
    const headers = {};
    return this.http.get(`${this.dogfoodurl}`,params);
  }
 


}


