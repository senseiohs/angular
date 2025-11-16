import { ChangeDetectionStrategy, Component, DestroyRef, Inject, inject, InjectionToken, OnInit } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Course } from '../model/course';
import { AsyncPipe } from '@angular/common';

//Factoria para crear el servicio de cursos
  // Este servicio se inyecta en el componente AppComponent
  // y se utiliza para cargar los cursos desde el servidor
  // y para actualizar los cursos en el servidor
  function courseServiceProvider(http: HttpClient) {
    return new CoursesService(http);
  }
  
  // Token para inyectar el servicio de cursos el cual debe ser único
  export const COURSES_SERVICE = new InjectionToken<CoursesService>(
    "COURSES_SERVICE"
  );

@Component({
  selector: 'cards-presentation',
  imports: [],  
  templateUrl: './cards-presentation.component.html',
  styleUrl: './cards-presentation.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
      {
        provide: COURSES_SERVICE, // Token que identifica el provider del courseService
        useFactory: courseServiceProvider, // Función que crea el courseService
        deps: [HttpClient], // Dependencias del courseService que requiere en el constructor
      },
    ]
}) 
  
export class CardsPresentationComponent implements OnInit {
    
    private readonly destroyRef = inject(DestroyRef);
    courses$: Observable<Course[]>;    
  
    //Inyectamos el servicio de cursos en el constructor utilizando el token COURSES_SERVICE
    // Esto permite que el servicio sea único y no se comparta entre diferentes instancias
    // de AppComponent, pero si lo necesitaramos en un ChildComponent solo lo inyectaríamos
    // en el constructor del ChildComponent invocando al mismo token COURSES_SERVICE
    constructor(
      @Inject(COURSES_SERVICE) private readonly coursesService: CoursesService
    ) {      
    }
  
    ngOnInit() {
      this.courses$ = this.coursesService.loadCourses();
    }
  
    OnSave(course: Course) {
      this.coursesService.UpdateCourse(course);
    }
}
