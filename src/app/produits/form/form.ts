import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { CategorieService } from '../service/categorieservice';
import {AsyncPipe} from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [AsyncPipe,ReactiveFormsModule],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  categories: any;
  formData!: FormGroup;
  constructor(private formBuilder: FormBuilder, private activeModal: NgbActiveModal, private categorieService: CategorieService) { 
    this.formData = this.formBuilder.group({
    nom: ['',[Validators.required]],
    prix: ['',[Validators.required]],
    categorie: ['',[Validators.required]]
  });
  }
  closeModal() {
    this.activeModal.close();
  }
  ngOnInit() {
    this.categories = this.categorieService.getCategories();
  }

  save() {
    const formValue = this.formData.value;
    
    const categorie=formValue.categorie;
    delete formValue.categorie;
    console.log(formValue);
    this.categorieService.addProduit(formValue, categorie).subscribe(response => {
      console.log('Produit ajouté avec succès', response);
    }, error => {
      console.error('Erreur lors de l\'ajout du produit', error);
    });
    this.activeModal.close(formValue); // Ferme le modal et retourne les données du formulaire
  } 


}
