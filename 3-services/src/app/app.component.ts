import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from "@angular/core";

import { Course } from "./model/course";
import { CoursesService } from "./services/courses.service";
import { AppConfig, CONFIG_TOKEN } from "src/tools/configuration";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  //This declaration and asignation don't working
  // courses: Course[];

  //This way to we need load data with OnPush
  courses$: Observable<Course[]>;

  constructor(
    private readonly coursesServiceFather: CoursesService,
    @Inject(CONFIG_TOKEN) private readonly config: AppConfig
  ) {
    console.log(config);
  }
  ngOnInit() {
    //This way don't working with OnPush
    // this.coursesServiceFather.loadCourses().subscribe({
    //   next: (response) => {
    //     this.courses = response;
    //   },
    // });

    //This way to working with OnPush
    this.courses$ = this.coursesServiceFather.loadCourses();
  }

  OnEditTitleCourse() {}

  OnSave(course: Course) {
    this.coursesServiceFather.UpdateCourse(course);
  }
}
