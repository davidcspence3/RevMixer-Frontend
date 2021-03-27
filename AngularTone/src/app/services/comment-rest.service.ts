import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Comments } from '../Models/Comments';

@Injectable({
  providedIn: 'root'
})
export class CommentRestService {

  httpOptions = {
    headers: new HttpHeaders(
      {
        'Content-Type':'application/json'
      }
    )
  }

  url : string = environment.UPLOAD_MUSIC_REST;

  constructor(private http:HttpClient) { }

  GetUser(userid:number ) : Observable<any>
  {
    return this.http.get<Comments>(`${this.url}/${userid}`, this.httpOptions)
  }
}
