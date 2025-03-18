import { Component, Input } from "@angular/core";

@Component({
  selector: "currencies",
  imports: [],
  templateUrl: "./currencies.component.html",
  styleUrl: "./currencies.component.css",
})
export class CurrenciesComponent {
  @Input()
  EuroActual: number = 0;

  @Input()
  isAngularWithTypescript: boolean;
}
