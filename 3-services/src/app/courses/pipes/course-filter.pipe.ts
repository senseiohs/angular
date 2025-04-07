import { Pipe, PipeTransform } from "@angular/core";
import { Course } from "src/app/model/course";

@Pipe({
  name: "CourseFilterByCatergory",
  standalone: false,
})
export class CourseFilterPipe implements PipeTransform {
  transform(courses: Course[], filter: string) {
    return courses.filter((course) => course.category === filter);
  }
}
