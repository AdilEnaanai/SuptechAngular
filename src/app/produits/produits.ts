import { Component, signal } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Form } from './form/form';
import { Produit, Produitservice } from './service/produitservice';
import {toSignal} from '@angular/core/rxjs-interop'
@Component({
  selector: 'app-produits',
  imports: [],
  templateUrl: './produits.html',
  styleUrl: './produits.css',
})
export class Produits {
  //produits :any= [];
  produits=signal<Produit[]>([]);
  constructor(private modalService:NgbModal, private produitService:Produitservice) {}
  ngOnInit() {
    this.produitService.getProduits().subscribe(data=>{
      this.produits.set(data);
    });
  }
  openModal() {
    const refModal= this.modalService.open(Form);
    //récupérer les données du formulaire
    refModal.result.then(data=>{
      console.log(data)
    })
    
  }
}
