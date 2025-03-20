import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RadiosService {

  constructor(private http:HttpClient) { }


  getRadios(){
    let url= "assets/BD/radios.json";
    return this.http.get(url)
  }


}
