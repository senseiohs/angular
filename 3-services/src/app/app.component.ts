import { Component, Inject, OnInit } from "@angular/core";

import { Course } from "./model/course";
import { CoursesService } from "./services/courses.service";
import { AppConfig, CONFIG_TOKEN } from "src/tools/configuration";
import { COURSES } from "src/db-data";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  standalone: false,
})
export class AppComponent implements OnInit {
  // courses$: Observable<Course[]>;
  courses = COURSES;

  constructor(
    private readonly coursesServiceFather: CoursesService,
    @Inject(CONFIG_TOKEN) private readonly config: AppConfig
  ) {
    console.log(config);
  }
  ngOnInit() {
    // this.courses$ = this.coursesServiceFather.loadCourses();
  }

  OnEditTitleCourse() {
    const course = this.courses[0];
    const newCourse: any = { ...course };
    newCourse.description = "New Value!";
    this.courses[0] = newCourse;
  }

  OnSave(course: Course) {
    this.coursesServiceFather.UpdateCourse(course);
  }
}
