import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenService {
  constructor(private http:HttpClient) { }

  private url =  "http://localhost:8057";

  public getscreen():Observable<Screen[]>{
    return  this.http.get<Screen[]>(`${this.url}/getscreen`)
}

public delscreen(id:number):Observable<any>{
  return this.http.delete<any>(`${this.url}/delscreen/${id}`)
  // /delbook/{bookid}
}

public addscreen(Movie:Object):Observable<Object>{
  return this.http.post<Object>(`${this.url}/addscreen`,Movie)
}

public updatescreen(id:number,movie:Screen):Observable<Object>{
  return this.http.put(`${this.url}/updatescreen/${id}`,movie)
}

public getscreenbyid(id:number):Observable<Screen>{
  return this.http.get<Screen>(`${this.url}/getscreenbyid/${id}`)
}
  
}
