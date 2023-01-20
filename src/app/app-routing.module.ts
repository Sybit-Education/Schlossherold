import { EventsComponent } from './events/events.component';
import { ArticleComponent } from './article/article.component';
import { ArticleListComponent } from './article-list/article-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventDetailsComponent } from './event-details/event-details.component';

const routes: Routes = [
  {path: '', component: ArticleListComponent},
  {path: 'events', component: EventsComponent},
  {path: 'events/:id', component: EventDetailsComponent},
  {path: ':id', component: ArticleComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
