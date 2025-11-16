import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  Signal,
} from "@angular/core";
import { Course } from "../model/course";
import { CoursesService } from "../services/courses.service";
import { toSignal } from "@angular/core/rxjs-interop";
import { HttpClient } from "@angular/common/http";
import { COURSES_SERVICE } from "../cards-presentation/cards-presentation.component";

function courseServiceProvider(http: HttpClient) {
  return new CoursesService(http);
}

@Component({
  selector: "signals-courses",
  imports: [],
  templateUrl: "./signals-courses.component.html",
  styleUrl: "./signals-courses.component.css",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
        provide: COURSES_SERVICE, // Token que identifica el provider del courseService
        useFactory: courseServiceProvider, // Función que crea el courseService
        deps: [HttpClient], // Dependencias del courseService que requiere en el constructor
      },
  ],
})
export class SignalsCoursesComponent implements OnInit {
  private readonly coursesService = inject(CoursesService);
  protected courses: Signal<Course[] | undefined> = toSignal(this.coursesService.loadCourses());
  
  ngOnInit(): void {    
    const current = this.courses();
    console.log("snapshot: ", current);    
  }
}
