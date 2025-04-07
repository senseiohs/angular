import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Attribute,
  Component,
  DoCheck,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
} from "@angular/core";
import { Course } from "src/app/model/course";

@Component({
  selector: "course-card",
  templateUrl: "./course-card.component.html",
  styleUrls: ["./course-card.component.css"],
  standalone: false,
})
export class CourseCardComponent
  implements
    OnInit,
    OnDestroy,
    OnChanges,
    AfterContentChecked,
    AfterViewChecked,
    AfterContentInit,
    AfterViewInit,
    DoCheck
{
  @Input()
  course: Course;

  @Input()
  cardIndex: number;

  @Output("courseChanged")
  courseEmitter = new EventEmitter<Course>();

  constructor(@Attribute("type") type: string) {
    console.log(`Constructor => This is courses value: `, this.course);
  }

  ngDoCheck(): void {
    console.log("ngDoCheck...");
  }
  ngAfterViewInit(): void {
    console.log("ngAfterViewInit...");
  }
  ngAfterContentInit(): void {
    console.log("ngAfterContentIni...");
  }

  ngAfterViewChecked(): void {
    console.log("ngAfterViewChecked");
    //Acá  Es ideal para realizar operaciones comunes del DOM, como desplazarse
    //al final de una lista o fijar el foco en un elemento determinado, etc.
  }

  //ESto se ejecuta cada vez que hay un cambio en nuestro componente
  //por lo tanto se debe tener cuidado con llamar a backend o largos calculos
  ngAfterContentChecked(): void {
    console.log("ngAfterContentChecked...");
    this.course.description = "ngAfterContentChecked";
    this.course.category = "ADVANCED";

    //This modification working not, because property is of component internal (card-image)
    //we see in console error throw
    //this.course.iconUrl = '';
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
