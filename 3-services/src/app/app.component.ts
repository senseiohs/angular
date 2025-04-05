import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from "@angular/core";

import { Course } from "./model/course";
import { CoursesService } from "./services/courses.service";
import { AppConfig, CONFIG_TOKEN } from "src/tools/configuration";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  courses: Course[];

  constructor(
    private readonly coursesServiceFather: CoursesService,
    @Inject(CONFIG_TOKEN) private readonly config: AppConfig
  ) {}

  ngOnInit() {
    this.coursesServiceFather
      .loadCourses()
      .subscribe((response) => (this.courses = response));
  }

  OnEditTitleCourse() {}

  OnSave(course: Course) {
    this.coursesServiceFather.UpdateCourse(course);
  }
}
