import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-confirm',
  imports: [],
  templateUrl: './confirm.html',
  styleUrl: './confirm.css',
})
export class Confirm {
 @Input()  nom!: string;

constructor(public activeModal:NgbActiveModal){}

}
