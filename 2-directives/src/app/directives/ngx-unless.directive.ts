import { Directive, Input, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[ngxUnless]",
  standalone: false,
})
export class NgxUnlessDirective {
  /*
  Variable para impedir que se renderice o se limpie el componente que estamos
  manipulando si no tiene el estado correcto
  */
  visible = false;

  constructor(
    private readonly templateRef: TemplateRef<any>,
    private readonly viewContainer: ViewContainerRef
  ) {}

  @Input()
  set ngxUnless(condition: boolean) {
    if (!condition && !this.visible) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.visible = true;
    } else if (condition && this.visible) {
      this.viewContainer.clear();
      this.visible = false;
    }
  }
}
