import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExampleserviceService } from './exampleservice.service';
import { AppComponent } from './app.component';
import { DirectiveexampleDirective } from './directiveexample.directive';
import { PipeexamplePipe } from './pipeexample.pipe';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    DirectiveexampleDirective,
    PipeexamplePipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
