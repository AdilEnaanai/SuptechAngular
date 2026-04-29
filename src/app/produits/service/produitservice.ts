import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Produit{
  id:string
  nom:string
  prix:number
  categorie:string
}

@Injectable({
  providedIn: 'root',
})
export class Produitservice {
  private apiUrl = 'http://localhost:8080/ventes/produits';
  constructor(private http: HttpClient) {}

  getProduits():Observable<Produit[]>{
    return this.http.get<Produit[]>(this.apiUrl)
  }

  deleteProduit(id:string){
    console.log(this.apiUrl+"/"+id)
    this.http.delete(this.apiUrl+"/"+id).subscribe((result)=>{
      if (result==true){
        
      }
    })
  }
}

//https://github.com/AdilEnaanai/SuptechAngular/