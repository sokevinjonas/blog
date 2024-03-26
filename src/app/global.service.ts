import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public articles : any[] = [
    {   
          "id":1,
          "title": "Les 10 meilleures destinations pour les amoureux de la nature",
          "description": "Découvrez les endroits les plus préservés de la planète pour vous reconnecter avec la nature et vous ressourcer.",
          "image": "https://ionicframework.com/docs/img/demos/thumbnail.svg"
      },
      {   
          "id":2,
          "title": "Les tendances mode printemps-été 2024 à ne pas manquer",
          "description": "Découvrez les dernières tendances en matière de mode pour être au top de la tendance cet été.",
          "image": "https://ionicframework.com/docs/img/demos/thumbnail.svg"
      },
      {   
          "id":3,
          "title": "Les 5 meilleures recettes de cuisine asiatique à essayer chez vous",
          "description": "Apprenez à cuisiner comme un chef avec ces recettes simples et délicieuses de la cuisine asiatique.",
          "image": "https://ionicframework.com/docs/img/demos/thumbnail.svg"
      },
      {   
          "id":4,
          "title": "Comment aménager un petit jardin urbain",
          "description": "Découvrez nos conseils pour transformer votre balcon ou votre terrasse en un petit coin de verdure agréable.",
          "image": "https://ionicframework.com/docs/img/demos/thumbnail.svg"
      },
      {   
          "id":5,
          "title": "Les 7 meilleures applications pour rester en forme",
          "description": "Découvrez notre sélection d'applications pour vous aider à rester en forme et à atteindre vos objectifs santé.",
          "image": "https://ionicframework.com/docs/img/demos/thumbnail.svg"
      },
      {   
          "id":6,
          "title": "Les secrets d'une peau parfaite : nos astuces beauté",
          "description": "Découvrez nos conseils et astuces pour prendre soin de votre peau et retrouver un teint éclatant.",
          "image": "https://ionicframework.com/docs/img/demos/thumbnail.svg"
      },
      {   
          "id":7,
          "title": "Les destinations les plus romantiques pour une lune de miel inoubliable",
          "description": "Découvrez les endroits les plus romantiques du monde pour célébrer votre amour lors de votre lune de miel.",
          "image": "https://ionicframework.com/docs/img/demos/thumbnail.svg"
      },
      {   
          "id":8,
          "title": "Les 5 livres à lire absolument ce mois-ci",
          "description": "Découvrez notre sélection de livres qui vous transporteront et vous captiveront jusqu'à la dernière page.",
          "image": "https://ionicframework.com/docs/img/demos/thumbnail.svg"
      },
      {   
          "id":9,
          "title": "Les tendances déco à suivre pour une maison stylée",
          "description": "Découvrez les dernières tendances en matière de décoration intérieure pour donner du style à votre maison.",
          "image": "https://ionicframework.com/docs/img/demos/thumbnail.svg"
      },
      {   
          "id":10,
          "title": "Les meilleures astuces pour un voyage pas cher",
          "description": "Découvrez nos conseils pour voyager sans vous ruiner et profiter pleinement de votre séjour.",
          "image": "https://ionicframework.com/docs/img/demos/thumbnail.svg"
      }
  ];
  
  public selectArticle: any;
  
  constructor() { }
}
