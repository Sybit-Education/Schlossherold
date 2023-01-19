import { Injectable } from '@angular/core';
import { Table, LinkedTable, Airtable, Base } from 'ngx-airtable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AirtableRepositoryService {

  articleTable: Table;
  authorTable: Table;
  calendarTable: Table;

  constructor(private airtable: Airtable) {
    const base: Base = this.airtable.base(environment.airtableBase);

    this.articleTable = base.table({ tableId: 'Article' });
    this.authorTable = base.table({ tableId: 'Author' });
    this.calendarTable = base.table({ tableId: 'Calendar' });
  }
}
