import {
  Attribute,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";
import { Course } from "../model/course";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
  standalone: false,
})
export class CourseCardComponent implements OnInit, OnDestroy, OnChanges {
  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output("courseChanged")
  courseEmitter = new EventEmitter<Course>();

  constructor(@Attribute("type") type: string) {
    console.log(`Constructor => This is courses value: `, this.course);
  }

  //The parameter "changes" let me know the object state both current and previously
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges", changes);
  }

  ngOnInit() {
    console.log("ngOnInit => This is courses value: ", this.course);
    //Sometimes we need initialize some data to the component,like call service endpoint to load data from
    //backend. This is the correct place.
    // this.coursesServiceFather.loadCourses().subscribe({
    //   next: (courses) =>{
    //     this.courses = courses;
    //   }
    // });
  }

  ngOnDestroy(): void {
    console.log("ngOnDestroy call...");
  }

  OnTitleChanges(newTitle: string): void {
    this.course.description = newTitle;
  }

  onSaveClicked(description: string) {
    this.courseEmitter.emit({ ...this.course, description });
  }
}
