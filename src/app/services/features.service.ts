import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FeaturesService {

  constructor(private http:HttpClient) { }

  getFeatures(){
    return this.http.get<FeaturesResult>("https://celeste-client-server.herokuapp.com/features");
  }
}
