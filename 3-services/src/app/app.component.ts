import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  InjectionToken,
  OnInit,
  QueryList,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { COURSES } from "../db-data";
import { Course } from "./model/course";
import { CourseCardComponent } from "./course-card/course-card.component";
import { HighlightedDirective } from "./directives/highlighted.directive";
import { Observable } from "rxjs";
import { CoursesService } from "./services/courses.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  standalone: false,
})
export class AppComponent implements OnInit {
  courses$: Observable<Course[]>;

  // Ya no necesitamos inyectar el token COURSES_SERVICE
  constructor(private readonly coursesService: CoursesService) {}

  ngOnInit() {
    this.courses$ = this.coursesService.loadCourses();
  }

  OnSave(course: Course) {
    this.coursesService.UpdateCourse(course);
  }
}
