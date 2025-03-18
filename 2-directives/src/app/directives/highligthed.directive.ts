import { Directive, Host, HostBinding, Input } from "@angular/core";

@Directive({
  selector: "[highligthed]",
  standalone: false,
})
export class HighligthedDirective {
  @Input("highligthed")
  isHighligthed = false;

  constructor() {
    console.log("Hi from directive create");
  }

  // Utilizamos la propiedad de entrada Input
  @HostBinding("class.highligthed")
  get cssClasses() {
    return this.isHighligthed;
  }

  //Estos ejemplos es para utilizar la directiva directamente sin necesidad del Input
  // Call the property class directly of DOM
  // @HostBinding("class.highligthed")
  // get cssClasses() {
  //   return true;
  // }

  // @HostBinding("className")
  // get cssClasses() {
  //   return "highligthed";
  // }

  // Call the style property and set value
  // @HostBinding("style.border")
  // get cssClasses() {
  //   return "1px solid red";
  // }

  //Esto nos sirve para setear directamente atributos del componente
  @HostBinding("attr.disabled")
  get disabled() {
    return "true";
  }
}
