import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { CourseComponent } from './course/course.component';
import { CoursesService } from './courses.service';
import { AuthorsComponent } from './authors/authors.component';
import { AuthorsService } from './authors.service';
import { SummaryPipe } from './summary.pipe';
import { FavoriteComponent } from './favourite/favorite.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { PanelComponent } from './panel/panel.component';
import { LikesComponent } from './likes/likes.component';
import { UnderstandingDirectivesComponent } from './understanding-directives/understanding-directives.component';
import { InputFormatDirective } from './input-format.directive';
import { ZippyComponent } from './zippy/zippy.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseComponent,
    AuthorsComponent,
    SummaryPipe,
    FavoriteComponent,
    MyComponentComponent,
    PanelComponent,
    LikesComponent,
    UnderstandingDirectivesComponent,
    InputFormatDirective,
    ZippyComponent
  ],
  imports: [
  BrowserModule,
    FormsModule
  ],
  providers: [
    CoursesService,
    AuthorsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
