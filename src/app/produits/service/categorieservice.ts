import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CategorieService {
  private apiUrl = 'http://localhost:8080/ventes/categories';
  constructor(private http: HttpClient) {}

  getCategories() {
    return this.http.get(this.apiUrl);
  }

   addProduit(produit: any,categorie:string) {
    const apiUrl = `http://localhost:8080/ventes/categories/${categorie}/produits`;
    return this.http.post(apiUrl, produit);
  }
}
