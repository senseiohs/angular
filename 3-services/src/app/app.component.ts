import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  DoCheck,
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
  changeDetection: ChangeDetectionStrategy.OnPush, //Debemos declarar changeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, DoCheck {
  courses: Course[];
  loaded = false;

  constructor(
    private readonly coursesServiceFather: CoursesService,
    @Inject(CONFIG_TOKEN) private readonly config: AppConfig,
    private cd: ChangeDetectorRef
  ) {}

  ngDoCheck(): void {
    console.log("ngDoCheck()");

    //No funciona - que chafa
    if (this.loaded) {
      this.cd.markForCheck();
      console.log("called cd.markForCheck()");
      this.loaded = undefined;
    }
  }

  ngOnInit() {
    this.coursesServiceFather.loadCourses().subscribe((response) => {
      this.courses = response;
      this.cd.markForCheck();
      // this.loaded = true;
    });
  }

  OnEditTitleCourse() {}

  OnSave(course: Course) {
    this.coursesServiceFather.UpdateCourse(course);
  }
}
