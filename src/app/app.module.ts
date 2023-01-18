import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NgxAirtableModule} from 'ngx-airtable';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from "../environments/environment";
import { ArticleComponent } from './article/article.component';

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxAirtableModule.forRoot({ apiKey: environment.airtableApiKey }),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
