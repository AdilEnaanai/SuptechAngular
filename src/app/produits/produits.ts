import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Form } from './form/form';
import { Produitservice } from './produitservice';
@Component({
  selector: 'app-produits',
  imports: [],
  templateUrl: './produits.html',
  styleUrl: './produits.css',
})
export class Produits {
  produits :any= [];
  constructor(private modalService:NgbModal, private produitService:Produitservice) {}
  ngOnInit() {
    this.produitService.getProduits().subscribe((data) => {
      this.produits = data ;
    });
  }
  openModal() {
    this.modalService.open(Form);
  }
}
