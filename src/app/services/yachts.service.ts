import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { YachtResult } from '../interfaces/yachtsAPT';

@Injectable({
  providedIn: 'root'
})
export class YachtsService {

  constructor(private http:HttpClient) { }
  
  getYachts(){
    return this.http.get<YachtResult>("https://celeste-client-server.herokuapp.com/yachts")
  }
}
