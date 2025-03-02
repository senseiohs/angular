import { Component, ViewChild } from "@angular/core";
import { CourseCardComponent } from "../course-card/course-card.component";
import { COURSES } from "src/db-data";
import { Course } from "../model/course";
import {
  DatePipe,
  CurrencyPipe,
  PercentPipe,
  DecimalPipe,
  KeyValuePipe,
  NgFor,
} from "@angular/common";
import { CurrenciesComponent } from "../currencies/currencies.component";

@Component({
  selector: "page-test",
  imports: [
    CourseCardComponent,
    DatePipe,
    CurrencyPipe,
    PercentPipe,
    DecimalPipe,
    KeyValuePipe,
    NgFor,
    CurrenciesComponent,
  ],
  templateUrl: "./page-test.component.html",
  styleUrl: "./page-test.component.css",
})
export class PageTestComponent {
  courses = COURSES;

  @ViewChild("firtCard")
  firstCard: CourseCardComponent;

  startDate = new Date(2024, 2, 12); //Date
  totalCoffeExport = 0.76; //percent
  salary = 100000; //currency
  amountEletrocit = 3.755435334; //Decimal

  onCourseSelected(course: Course) {
    console.log(this.firstCard.course);
    console.log("Course app component - Button Clicked...", course);
  }
}
