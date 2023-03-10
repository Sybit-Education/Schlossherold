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
import { EditionComponent } from './edition/edition.component';
import { EventsComponent } from './events/events.component';
import { EventDetailsComponent } from './event-details/event-details.component';

@NgModule({
    declarations: [
        AppComponent,
        ArticleComponent,
        AuthorComponent,
        ArticleListComponent,
        EditionComponent,
        EventsComponent,
        EventDetailsComponent
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
