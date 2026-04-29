import { Component, signal } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Form } from './form/form';
import { Produit, Produitservice } from './service/produitservice';
import { Confirm } from './confirm/confirm';
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
      this.produits.set([...this.produits(),data])
    })
    
  }

  openDeleteModal(produit:Produit){
    const refModal=this.modalService.open(Confirm)
    refModal.componentInstance.nom=produit.nom

    refModal.result.then(result=>{
      if (result=="supprimer"){
        this.produitService.deleteProduit(produit.id)
        this.produits.update(produits=>produits.filter(p=>p.id!=produit.id))
      }
    })


  }
}
