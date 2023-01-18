import { Component } from '@angular/core';
import { environment } from "../environments/environment";
import { Observable } from 'rxjs';
import { Airtable, Table } from 'ngx-airtable';
import { share, tap } from 'rxjs/operators';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Schlossherold';
  base = environment.airtableBase;

  author_table: Table;

  //TODO Author Model

  constructor(private readonly airtable: Airtable) {
    this.initAirtable();
  }

  public ngOnInit(): void {
    this._fetchData();
  }

  private initAirtable(): void {
    this.author_table = this.airtable.base(this.base).table({tableId: 'tbly1V8uixNX5fLY5'});
    //this.base = this.airtable.build('appDF1y0se11zccJ6');
  }

  private _fetchData(): void {
    this.author_table.select({maxRecords: 10}).firstPage().pipe(share()).subscribe({
      next(value) {
          console.log(value);
      },
    });
  }
}
