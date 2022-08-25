import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../model/Customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  constructor(private http:HttpClient) { }

  private url =  "http://localhost:8057";

  public getcust():Observable<Customer[]>{
    return  this.http.get<Customer[]>(`${this.url}/getCust`)
}
  public addCustomer(Customer:Object):Observable<Object>{
    return this.http.post<Object>(`${this.url}/customer`,Customer)
  }
}
