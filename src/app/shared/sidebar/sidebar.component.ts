import { Component} from '@angular/core';

import { GiffService } from 'src/app/services/giff.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {
  get historial():string[] {
    return this.gifsService.historial;
  }

  constructor(private gifsService: GiffService) {
  }

  searchByTitle(title:string):void {
    this.gifsService.searchGifs(title);
  }
}
