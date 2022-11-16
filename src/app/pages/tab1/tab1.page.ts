import { Component, OnInit } from '@angular/core';
import { Article, NewsResponse } from 'src/app/interfaces';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{
  /* parte 3 */
  public articles: Article[] = [];
  /* 3 */
  constructor(private newServise: NewsService) {}
 
  /* Parte 1 para firma descmentar y comenta la parte 2 */
  ngOnInit() {
    this.newServise.getTopHeadLine()
    .subscribe(resp => {
      console.log(resp);
    });
  } 

  /* Para parte 2 */
 /*  ngOnInit() {
    this.newServise.getTopHeadLine()
    .subscribe( articles => {
      console.log(articles);
    });
  } */

  /* Para parte 3 */
  /* ngOnInit() {
    this.newServise.getTopHeadLine()
    .subscribe( articles => this.articles.push(...articles));
  } */

}



 