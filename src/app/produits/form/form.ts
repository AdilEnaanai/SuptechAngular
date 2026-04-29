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

    this.categorieService.addProduit(formValue, categorie).subscribe(response=>{
        this.activeModal.close(response); 
    });

 } 


}
