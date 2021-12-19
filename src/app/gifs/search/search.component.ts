import { Component, ElementRef, ViewChild} from '@angular/core';
import { GiffService } from 'src/app/services/giff.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent {
  @ViewChild('txtSearch') txtSearch!:ElementRef<HTMLInputElement>;

  search() {
    const value = this.txtSearch.nativeElement.value.trim().toUpperCase();

    this.txtSearch.nativeElement.value = '';
    if (!value) {
      console.error('No se permiten caracteres vacíos');
      return;
    }

    this.gifsService.searchGifs(value);
  }

  constructor(private gifsService:GiffService) {

  }
}
