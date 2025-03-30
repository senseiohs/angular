import { Component, Inject, OnInit } from "@angular/core";

import { Course } from "./model/course";
import { Observable } from "rxjs";
import { CoursesService } from "./services/courses.service";
import { AppConfig, CONFIG_TOKEN } from "src/tools/configuration";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  standalone: false,
})
export class AppComponent implements OnInit {
  courses$: Observable<Course[]>;
  constructor(
    private readonly coursesService: CoursesService,
    @Inject(CONFIG_TOKEN) private readonly config: AppConfig
  ) {
    console.log(config);
  }
  ngOnInit() {
    this.courses$ = this.coursesService.loadCourses();
  }

  OnSave(course: Course) {
    this.coursesService.UpdateCourse(course);
  }
}
