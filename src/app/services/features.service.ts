import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FeaturesResult } from '../interfaces/featuresAPI';

@Injectable({
  providedIn: 'root'
})
export class FeaturesService {

  constructor(private http:HttpClient) { }

  getFeatures(){
    return this.http.get<FeaturesResult>("https://celeste-client-server.herokuapp.com/features");
  }
}
