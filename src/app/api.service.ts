import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _HttpClient:HttpClient) { }

    getPosts():Observable<any>{
      return this._HttpClient.get('https://jsonplaceholder.typicode.com/posts')
    }

    getPhtoes():Observable<any>{
      return this._HttpClient.get('https://jsonplaceholder.typicode.com/photos')
    }

    getUsers():Observable<any>{
      return this._HttpClient.get('https://jsonplaceholder.typicode.com/users')
    }

    getComments():Observable<any>{
      return this._HttpClient.get('https://jsonplaceholder.typicode.com/comments')
    }
  
  }

