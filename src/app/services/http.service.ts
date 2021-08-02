import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment as env } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Schema } from '../interface/schema';


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http:HttpClient) { }


  getProfile():Observable<Schema>{
    return this.http.get<Schema>(`${env.BASE_URL}/Register/`)
  }
  getUserProfile(id:number):Observable<Schema>{
    return this.http.get<Schema>(`${env.BASE_URL}/Register/${id}`)
  }



  postProfile(profileData:Schema):Observable<Schema>{
    return this.http.post<Schema>(`${env.BASE_URL}/Register`,profileData)
  }


  editProfilePhoto(id:number,image:Schema):Observable<Schema>{
   
 
let headers = new HttpHeaders()
 
headers=headers.append('content-type','application/json') 
   return this.http.put<Schema>(`${env.BASE_URL}/Register/${id}`,image,{ 'headers': headers });
  
  }
}
