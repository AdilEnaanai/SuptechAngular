import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Produitservice {
  private apiUrl = 'http://localhost:8080/ventes/produits';
  constructor(private http: HttpClient) {}

  getProduits() {
    return this.http.get(this.apiUrl);
  }

 

}
