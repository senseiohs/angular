import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { Course } from "src/app/model/course";

@Injectable({
  providedIn: "root", //Tree-Shakeable:Esta propiedad indica que el servicio es singleton
  //y se inyecta en la raíz de la aplicación
})
export class CoursesService {
  constructor(private readonly http: HttpClient) {}

  loadCourses(): Observable<Course[]> {
    const params = new HttpParams().set("page", "1").set("pageSize", "10");
    return this.http.get<Course[]>("/api/courses", { params });
  }

  UpdateCourse(course: Course): void {
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      "X-Auth": "my-token",
    });
    this.http
      .put<Course>(`/api/courses/${course.id}`, course, { headers })
      .subscribe((course) => {
        console.log("Course updated", course);
      });
  }
}
