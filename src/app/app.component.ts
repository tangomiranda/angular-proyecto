import { Component } from '@angular/core';
import { MatPaginatorIntl } from '@angular/material/paginator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    public mainPaginator: MatPaginatorIntl
  ) { }

  ngOnInit(): void {
    // Temporal (Paginador)
    const getRangeLabelBase = this.mainPaginator.getRangeLabel;
    this.mainPaginator.itemsPerPageLabel = 'Ítems por pág.';
    this.mainPaginator.firstPageLabel = 'Primera pág.';
    this.mainPaginator.lastPageLabel = 'Última pág.';
    this.mainPaginator.nextPageLabel = 'Siguiente pág.';
    this.mainPaginator.previousPageLabel = 'Pág. anterior';
    this.mainPaginator.getRangeLabel = (page: number, size: number, len: number) => {
      return getRangeLabelBase(page, size, len).replace('of', 'de');
    };
  }
}
