import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TemplateFormComponent } from './template/template-form.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [ 
    BrowserModule,
    FormsModule
   ],
  declarations: [ 
    AppComponent,
    TemplateFormComponent
   ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}