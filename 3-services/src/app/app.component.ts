import { Component, Inject, OnInit } from "@angular/core";

import { Course } from "./model/course";
import { Observable } from "rxjs";
import { CoursesService } from "./services/courses.service";
import { APP_CONFIG, AppConfig, CONFIG_TOKEN } from "src/tools/configuration";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  standalone: false,
  providers: [
    {
      provide: CONFIG_TOKEN, // Esta inyección no es Tree-Shakeable
      useFactory: () => APP_CONFIG, //Interface que inyecta la configuración
    },
  ],
})
export class AppComponent implements OnInit {
  courses$: Observable<Course[]>;
  constructor(
    private readonly coursesService: CoursesService,
    //Como no es una clase typescript que existe en ejecución, sino una interface que no existe
    // se debe especificar el token
    @Inject(CONFIG_TOKEN) private readonly appConfiguration: AppConfig
  ) //inicializar en el constructor
  {
    // Como esta inyección no es Tree-Shakeable y la borramos del constructor y no utilizamos
    // el console, igualmente la estara instanciando en el main.js, consumiendo memoria
    console.log(appConfiguration);
  }

  ngOnInit() {
    this.courses$ = this.coursesService.loadCourses();
  }

  OnSave(course: Course) {
    this.coursesService.UpdateCourse(course);
  }
}
