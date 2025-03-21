import {
  Directive,
  EventEmitter,
  HostBinding,
  HostListener,
  Input,
  Output,
} from "@angular/core";

@Directive({
  selector: "[highligthedEvent]",
  standalone: false,
})
export class HighligthedEventDirective {
  @Input("highligthedEvent")
  isHighligthed = false;

  @Output()
  toogleHighlight = new EventEmitter();

  constructor() {
    console.log("Hi from directive with events");
  }

  @HostBinding("class.highligthedEvent")
  get cssClasses() {
    return this.isHighligthed;
  }

  // @HostListener("mouseover")
  // mouseOver() {
  //   this.isHighligthed = true;
  // }

  // This is another way to create the hostListener
  @HostListener("mouseover", ["$event"])
  mouseOver($event) {
    console.log($event);
    this.isHighligthed = true;
    this.toogleHighlight.emit(this.isHighligthed);
  }

  @HostListener("mouseleave")
  mouseLeave() {
    this.isHighligthed = false;
    this.toogleHighlight.emit(this.isHighligthed);
  }
}
