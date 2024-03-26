import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GlobalService } from '../global.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss'],
})
export class ArticlePage implements OnInit {
  article: any = {
    
  };

  constructor( public globalService: GlobalService) { }

  ngOnInit() {
    // this.article = this.globalService.selectArticle;
    // console.log(this.article);
    console.log(this.globalService.selectArticle);
  }

}
