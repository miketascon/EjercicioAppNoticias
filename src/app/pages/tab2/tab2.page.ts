import { Component, ViewChild, OnInit } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { NoticiasService } from '../../services/noticias.service';
import { Article } from '../../interfaces/interfaces';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements OnInit {


  @ViewChild(IonSegment) segment: IonSegment;
  categorias = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];
  noticias: Article[] = [];

  constructor(private noticiasService: NoticiasService) {

  }

  ngOnInit(){

  }

  ionViewDidEnter() {
    this.segment.value = this.categorias[0];
    this.cargarNoticias(this.segment.value);
  }

  cambioCategoria( event ) {

    this.noticias = [];
    this.cargarNoticias(event.detail.value);
  }

  cargarNoticias( categoria, event?){

    this.noticiasService.getTopHeadlinesCategoria(categoria).subscribe(
      resp => {
        if (resp.articles.length === 0) {
          event.target.disabled = true;
          event.target.complete();
        }

        this.noticias.push(...resp.articles);

        if (event) {
          event.target.complete();
        }
      }
    );

  }

  loadData( event){
    this.cargarNoticias(this.segment.value, event);

  }



}
