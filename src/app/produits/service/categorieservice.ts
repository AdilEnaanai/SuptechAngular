import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Produit } from './produitservice';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CategorieService {
  private apiUrl = 'http://localhost:8080/ventes/categories';
  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get(this.apiUrl);
  }

   addProduit(produit: any,categorie:string):Observable<Produit> {
    const apiUrl = `http://localhost:8080/ventes/categories/${categorie}/produits`;
    return this.http.post<Produit>(apiUrl, produit);
  }
}
