import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormControl, FormGroup } from '@angular/forms';
import { AppComponent } from './app.component';
import { GreetComponent } from './greet/greet.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { TemplateformexampleComponent } from './templateformexample/templateformexample.component';
import { ValidtemplateformComponent } from './validtemplateform/validtemplateform.component';
import { ReactiveformexampleComponent } from './reactiveformexample/reactiveformexample.component';
@NgModule({
  declarations: [
    AppComponent,
    GreetComponent,
    TemplateformexampleComponent,
    ValidtemplateformComponent,
    ReactiveformexampleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
