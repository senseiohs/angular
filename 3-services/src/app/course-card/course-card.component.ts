import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Self,
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

  constructor(@Self() private readonly coursesServicePrivate: CoursesService) {}

  ngOnInit() {
    const courses = this.coursesServicePrivate.loadCourses();
  }

  onSaveClicked(description: string) {
    this.courseEmitter.emit({ ...this.course, description });
  }
}
