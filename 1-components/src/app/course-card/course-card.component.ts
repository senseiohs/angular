import { Component, EventEmitter, Input, Output } from "@angular/core";
import { Course } from "../model/course";
import { NgClass, NgIf, NgStyle } from "@angular/common";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrl: "./course-card.component.css",
  imports: [NgIf, NgClass, NgStyle],
})
export class CourseCardComponent {
  @Input({
    required: true,
  })
  course: Course;

  @Input({ required: true })
  index: number;

  @Output()
  courseSelected = new EventEmitter<Course>();

  onCourseViewed() {
    console.log("Course card component - Button Clicked...");
    this.courseSelected.emit(this.course);
  }

  onSetCardClasses() {
    if (this.course.category === "BEGINNER") {
      return "beginner";
    }
  }

  onSetCardStyle() {
    return {
      "text-decoration": "underline",
    };
  }
}
