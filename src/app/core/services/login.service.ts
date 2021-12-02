import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  constructor(private http: HttpClient) { }

  conectarApiLoginLaravel(datos:any){
    return this.http.post('http://127.0.0.1:8000/api/auth/login', datos);
  }

}
