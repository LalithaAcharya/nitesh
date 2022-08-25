import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Ticket } from '../model/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  constructor(private http:HttpClient) { }

  private url =  "http://localhost:8057";

  public getticket():Observable<Ticket[]>{
    return  this.http.get<Ticket[]>(`${this.url}/getticket`)
}

public delticket(id:number):Observable<any>{
  return this.http.delete<any>(`${this.url}/delticket/${id}`)
  // /delbook/{bookid}
}

public addticket(Ticket:Object):Observable<Object>{
  return this.http.post<Object>(`${this.url}/addticket`,Ticket)
}

public updateticket(id:number,ticket:Ticket):Observable<Object>{
  return this.http.put(`${this.url}/updateticket/${id}`,ticket)
}

public getticketbyid(id:number):Observable<Ticket>{
  return this.http.get<Ticket>(`${this.url}/getticketbyid/${id}`)
}
}
