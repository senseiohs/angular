import { Component } from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  standalone: false,
})
export class AppComponent {
  courses = COURSES;

  startDate = new Date(2024, 2, 12); //Date
  totalCoffeExport = 0.76; //percent
  salary = 100000; //currency
  amountEletrocit = 3.755435334; //Decimal

  onCourseSelected(course: Course) {
    console.log("Course app component - Button Clicked...", course);
  }
}
