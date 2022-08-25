import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  constructor(private http:HttpClient) { }

  private url =  "http://localhost:8057"

  public loginUserFromRemote(user:User):Observable<any>{
     return this.http.post<any>(`${this.url}/login`,user)
  }

  public registerUserFromRemote(user:User):Observable<any>{
    return this.http.post<any>(`${this.url}/registeruser`,user)
  }
}
