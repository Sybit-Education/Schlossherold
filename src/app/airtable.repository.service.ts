import { Injectable } from '@angular/core';
import { Table, LinkedTable, Airtable, Base } from 'ngx-airtable';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AirtableRepositoryService {

  articleTable: Table;

  constructor(private airtable: Airtable) {
    const base: Base = this.airtable.base(environment.airtableBase);

    this.articleTable = base.table({ tableId: 'Article' });
  }

}
