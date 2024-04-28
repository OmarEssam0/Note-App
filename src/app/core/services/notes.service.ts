import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { Notes } from '../interfaces/notes';

@Injectable({
  providedIn: 'root'
})
export class NotesService {

  constructor(private _httpClient:HttpClient) { }

  addNote(data:Notes):Observable<any>{
    return this._httpClient.post(environment.noteUrl , data , {
      headers : {token : localStorage.getItem("token") || ''}
    }
    )
  }

  getNotes():Observable<any>{
    return this._httpClient.get(environment.noteUrl , {
      headers : {token : localStorage.getItem("token") || ''}
    }
    )
  }

  updateNote(data:Notes , id:string):Observable<any>{
    return this._httpClient.put(environment.noteUrl+id, data , {
      headers : {token : localStorage.getItem("token") || ''}
    }
    )
  }

  deleteNote(id:string):Observable<any>{
    return this._httpClient.delete(`${environment.noteUrl}${id}`, {
      headers : {token : localStorage.getItem("token") || ''}
    }
    )
  }
}
