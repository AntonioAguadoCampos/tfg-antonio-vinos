import { Component } from '@angular/core';
import { IndexedbService } from 'src/app/services/indexedb.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent {
  public data!: any;
  public headers!: any;

  constructor(private indexedDBService: IndexedbService) {}

  ngOnInit() {
    this.indexedDBService.getAllItems().then((data: any) => {
      this.data = data;
      this.headers = data[0].map((question: any) => question.question);
    });
  }
}
