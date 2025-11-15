import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from './card/card.component';
import { Person } from './models/person';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'professional';
  partner: Person;

  constructor() {
    this.partner = {
      Photo: 'Charlie',
      FirstName: 'Sensei',
      SecondName: 'Oogway',
      FirstLastName: 'Harijan',
      SecondLastName: 'Shalem',
      Age: 21,
      Profession: 'Gurú Informatic',
      Height: 1.78,
      Weight: 70,
      FootSize: 42,
      Email: 'sensei-oogway-hs@gmail.com',
      Address: 'Sitget 37',
      PhoneNumber: '+34624785201',
      Birth: new Date(1995, 10, 19),
      PlaceBirth: 'Medellín - Antioquia - Colombia',
      Nationality: 'Colombiano',
      Gender: 'Masculino',
    };
  }
}
