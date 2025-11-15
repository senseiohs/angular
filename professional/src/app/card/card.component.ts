import { Component, Input } from '@angular/core';
import { Person } from '../models/person';

@Component({
    selector: 'app-card',
    imports: [],
    templateUrl: './card.component.html',
    styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({ required: true })
  Partner: Person;
}
