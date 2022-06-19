import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  constructor(
    private firestore: AngularFirestore
  ) {}

  public createPeli(data: {nombre: string, url: string}) {
    return this.firestore.collection('peliculas').add(data);
  }

  //obtiene una peli
  public getPeli(documentId: string) {
    return this.firestore.collection('peliculas').doc(documentId).snapshotChanges();
  }
  //Obtiene todas las pelis
  public getPelis() {
    return this.firestore.collection('peliculas').snapshotChanges();
  }
  //Actualiza una peli
  public updatePeli(documentId: string, data: any) {
    return this.firestore.collection('peliculas').doc(documentId).set(data);
  }

  public deletePeli(documentId: string) {
    return this.firestore.collection('peliculas').doc(documentId).delete();
  }

  
}
