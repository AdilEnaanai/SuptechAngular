import { Component } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-form',
  imports: [],
  templateUrl: './form.html',
  styleUrl: './form.css',
})
export class Form {
  constructor(private activeModal:NgbActiveModal) {}
  closeModal() {
    this.activeModal.close();
  }
}
