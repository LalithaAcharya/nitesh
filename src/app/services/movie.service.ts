import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Movie } from '../model/movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http:HttpClient) { }

  private url =  "http://localhost:8057";

  public getmovie():Observable<Movie[]>{
    return  this.http.get<Movie[]>(`${this.url}/getmovie`)
}

public delmovie(id:number):Observable<any>{
  return this.http.delete<any>(`${this.url}/delmovie/${id}`)
  // /delbook/{bookid}
}

public addmovie(Movie:Object):Observable<Object>{
  return this.http.post<Object>(`${this.url}/addmovie`,Movie)
}

public updatemovie(id:number,movie:Movie):Observable<Object>{
  return this.http.put(`${this.url}/updatemovie/${id}`,movie)
}

public getvalbyid(id:number):Observable<Movie>{
  return this.http.get<Movie>(`${this.url}/getmoviebyid/${id}`)
}
}
