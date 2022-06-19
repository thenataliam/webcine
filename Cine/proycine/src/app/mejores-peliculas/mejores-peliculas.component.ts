import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../services/firestore/firestore.service';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-mejores-peliculas',
  templateUrl: './mejores-peliculas.component.html',
  styleUrls: ['./mejores-peliculas.component.css']
})
export class MejoresPeliculasComponent implements OnInit {
  public movies: any = [];
  public documentId = null;
  public currentStatus = 1;
  
  public newMovieForm = new FormGroup({
  nombre: new FormControl('', Validators.required),
  url: new FormControl('', Validators.required),
  id: new FormControl('')
});
  constructor(private firestoreService: FirestoreService ) {
    this.newMovieForm.setValue({
      id: '',
      nombre: '',
      url: ''
    });
   }

  
   public createPeli(form: any, documentId = this.documentId) {
    console.log(`Status: ${this.currentStatus}`);
    if (this.currentStatus == 1) {
      let data = {
        nombre: form.nombre,
        url: form.url
      }
      this.firestoreService.createPeli(data).then(() => {
        console.log('Documento creado exitósamente!');
        this.newMovieForm.setValue({
          nombre: '',
          url: '',
          id: ''
        });
      }, (error) => {
        console.error(error);
      });
    } else {
      let data = {
        nombre: form.nombre,
        url: form.url
      }
      this.firestoreService.updatePeli(documentId!, data).then(() => {
        this.currentStatus = 1;
        this.newMovieForm.setValue({
          nombre: '',
          url: '',
          id: ''
        });
        console.log('Documento editado exitósamente');
      }, (error) => {
        console.log(error);
      });
    }
  }

  public editarPeli(documentId = this.documentId) {
    let editSubscribe = this.firestoreService.getPeli(documentId!).subscribe((movie: any) => {
      this.currentStatus = 2;
      this.documentId = documentId;
      this.newMovieForm.setValue({
        id: documentId,
        nombre: movie.payload.data()['nombre'],
        url: movie.payload.data()['url']
      });
      editSubscribe.unsubscribe();
    });
  }


  public deletePeli(documentId = this.documentId!) {
    this.firestoreService.deletePeli(documentId).then(() => {
      console.log('Documento eliminado!');
    }, (error) => {
      console.error(error);
    });
  }
  
  ngOnInit() {
    this.firestoreService.getPelis().subscribe((pelisSnapshot) => {
      this.movies = [];
      pelisSnapshot.forEach((movieData: any) => {
        this.movies.push({
          id: movieData.payload.doc.id,
          data: movieData.payload.doc.data()
        });
      })
    });
  }


}

