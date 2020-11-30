import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Article } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DatalocalService {

  noticias: Article[] = [];

  constructor( private storage: Storage) { }

  guardarNoticia(noticia: Article){
    this.noticias.unshift( noticia );
    this.storage.set('favoritos', this.noticias);
  }


  cargarfavorito(){

  }
}
