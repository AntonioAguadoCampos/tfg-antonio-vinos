import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IndexedbService } from 'src/app/services/indexedb.service';

@Component({
  selector: 'app-final-form',
  templateUrl: './final-form.component.html',
  styleUrls: ['./final-form.component.scss'],
})
export class FinalFormComponent {
  questions!: any[];
  currentQuestionIndex = 0;
  answers = [
    'Totalmente en desacuerdo',
    'Mayormente en desacuerdo',
    'Ligeramente en desacuerdo',
    'Ni de acuerdo ni en desacuerdo',
    'Ligeramente de acuerdo',
    'Mayormente de acuerdo',
    'Totalmente de acuerdo',
  ];
  userAnwser!: string;

  constructor(
    private http: HttpClient,
    private router: Router,
    private indexedDBService: IndexedbService,
  ) {}

  ngOnInit() {
    this.http.get('assets/questions.json').subscribe((res: any) => {
      this.questions = res;
    });
  }

  showResult() {
    console.log(this.questions);
    this.indexedDBService.addItem(this.questions);
    this.router.navigateByUrl('/');
  }
}
