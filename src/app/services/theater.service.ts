import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Theater } from '../model/theater';

@Injectable({
  providedIn: 'root'
})
export class TheaterService {
  constructor(private http:HttpClient) { }

  private url =  "http://localhost:8057";

  public gettheater():Observable<Theater[]>{
    return  this.http.get<Theater[]>(`${this.url}/gettheatre`)
}

public deltheater(id:number):Observable<any>{
  return this.http.delete<any>(`${this.url}/deltheatre/${id}`)
  // /delbook/{bookid}
}

public addtheater(Theater:Object):Observable<Object>{
  return this.http.post<Object>(`${this.url}/addtheatre`,Theater)
}

public updatetheater(id:number,theater:Theater):Observable<Object>{
  return this.http.put(`${this.url}/updatetheater/${id}`,theater)
}

public gettheaterbyid(id:number):Observable<Theater>{
  return this.http.get<Theater>(`${this.url}/gettheatrebyid/${id}`)
}
}
