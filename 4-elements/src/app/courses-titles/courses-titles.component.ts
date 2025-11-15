import { Component, Input } from "@angular/core";

@Component({
  selector: "courses-titles",
  imports: [],
  templateUrl: "./courses-titles.component.html",
  styleUrl: "./courses-titles.component.css",
})
export class CoursesTitlesComponent {
  @Input()
  title: string;
}
