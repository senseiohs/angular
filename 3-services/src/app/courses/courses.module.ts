import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { HighlightedDirective } from "./directives/highlighted.directive";
import { CourseCardComponent } from "./course-card/course-card.component";
import { CourseImageComponent } from "./course-image/course-image.component";
import { NgxUnlessDirective } from "./directives/ngx-unless.directive";

@NgModule({
  declarations: [
    CourseCardComponent,
    CourseImageComponent,
    HighlightedDirective,
    NgxUnlessDirective,
  ],
  imports: [BrowserModule, BrowserAnimationsModule],
  providers: [],
  exports: [CourseCardComponent, CourseImageComponent],
})
export class CoursesModule {}
