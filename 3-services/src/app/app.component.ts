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

//Implementamos DoCheck
export class AppComponent implements OnInit {
  courses: Course[] = COURSES;

  constructor(
    private readonly coursesServiceFather: CoursesService,
    @Inject(CONFIG_TOKEN) private readonly config: AppConfig
  ) {}

  ngOnInit() {}

  OnEditTitleCourse(): void {
    //Vamos a eliminar los cursos por lo tanto el card-component ocultara
    // la tarjeta y se lanzara el evento onDestroy()
    this.courses = [undefined];
  }

  OnSave(course: Course): void {
    this.coursesServiceFather.UpdateCourse(course);
  }
}
