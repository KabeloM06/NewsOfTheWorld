import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  baseUrl : string = 'https://newsapi.org/v2/';
  apiKey: string = 'c3316421fccc4f958e65815b2d47a2b7';
  country: string = 'za';

  constructor(private http: HttpClient) { }

  getStories(){
    return this.http.get(`${this.baseUrl}top-headlines?country=${this.country}&apiKey=${this.apiKey}`);
  }

}


