import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxAirtableModule } from 'ngx-airtable';
import { HttpClientModule } from '@angular/common/http';

import { environment } from "../environments/environment";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { ArticleComponent } from './article/article.component';
import { AuthorComponent } from "./author/author.component";
import { EventsComponent } from './events/events.component';

@NgModule({
    declarations: [
        AppComponent,
        ArticleComponent,
        AuthorComponent,
        ArticleListComponent,
        EventsComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        NgxAirtableModule.forRoot({ apiKey: environment.airtableApiKey }),
        AppRoutingModule
    ]
})
export class AppModule { }
