import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Article, NewsResponse } from '../interfaces';
import {map} from 'rxjs/operators'
const apiKey = environment.apyKey
@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private http: HttpClient) { }

/* Descomentar para parte 1 */
  getTopHeadLine(){
    return this.http.get<NewsResponse>('https://newsapi.org/v2/top-headlines?country=us&category=business', {
      params:{
        apiKey:apiKey
      }
    });
  } 

  
  /* Para parte 2  y 3ra parte*/
  /* getTopHeadLine():Observable<Article[]>{
    return this.http.get<NewsResponse>('https://newsapi.org/v2/top-headlines?country=us&category=business', {
      params:{
        apiKey:apiKey
      }
    }).pipe(
      map(({ articles}) => articles)
    );
  } */
}
