import { Component } from '@angular/core';
import { GiffService } from 'src/app/services/giff.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styles: [
  ]
})
export class ResultsComponent {
  get results() {
    return this.gifService.results;
  }

  constructor(private gifService: GiffService) {
  }
}
