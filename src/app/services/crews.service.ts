import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CrewResult } from '../interfaces/crewAPI';

@Injectable({
  providedIn: 'root'
})
export class CrewsService {

  constructor(private http:HttpClient) { }

  getCrew(){
    return this.http.get<CrewResult>("https://celeste-client-server.herokuapp.com/crews");
  }
}
