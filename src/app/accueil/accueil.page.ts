import { Component, OnInit } from '@angular/core';
import { GlobalService } from '../global.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.page.html',
  styleUrls: ['./accueil.page.scss'],
})
export class AccueilPage implements OnInit {
    
    articles: any[] = []; // Déclaration de la propriété articles
    constructor(public globalService: GlobalService, private router: Router) { }

    ngOnInit() {
        this.articles = this.globalService.articles;
        console.log(this.globalService.articles);
    }

    setSelectedArticle(article: any) {
      this.globalService.selectArticle = article;
      this.router.navigate(['/article']);
    }

    rechercher(event: any) {
      this.articles = this.globalService.articles;
      console.log("Text recherche:",event.target.value);
      this.articles = this.articles.filter(article =>{
        return article.title.indexOf(event.target.value)>-1;
      })

    }
} 
