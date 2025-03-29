import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Course } from "../model/course";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CoursesService {
  constructor(private readonly http: HttpClient) {}

  loadCourses(): Observable<Course[]> {
    const params = new HttpParams().set("page", "1").set("pageSize", "10");
    return this.http.get<Course[]>("/api/courses", { params });
  }
}
