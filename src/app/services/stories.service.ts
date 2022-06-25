import { Injectable } from '@angular/core';

import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class StoriesService {

  constructor(private http: HttpClient) { }

  getStories(){
    return this.http.get('https://newsapi.org/v2/top-headlines?country=za&apiKey=c3316421fccc4f958e65815b2d47a2b7');
  }

}


