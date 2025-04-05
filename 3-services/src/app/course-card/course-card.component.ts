import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Self,
  SkipSelf,
} from "@angular/core";
import { Course } from "../model/course";
import { CoursesService } from "../services/courses.service";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
  standalone: false,
  providers: [CoursesService],
})
export class CourseCardComponent implements OnInit {
  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output("courseChanged")
  courseEmitter = new EventEmitter<Course>();

  //SkipSelf dice que no tome el provider local del servicio, sino el del padre
  constructor(
    @SkipSelf() private readonly coursesServicePrivate: CoursesService
  ) {}

  ngOnInit() {
    // const courses = this.coursesServicePrivate.loadCourses();
  }

  OnTitleChanges(newTitle: string): void {
    this.course.description = newTitle;
  }

  onSaveClicked(description: string) {
    this.courseEmitter.emit({ ...this.course, description });
  }
}
