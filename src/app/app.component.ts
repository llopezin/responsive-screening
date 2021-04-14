import { Component, OnInit } from '@angular/core';
import { Person } from './models/person';
import { PeopleService } from './services/people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = "Cards App";

  public users: Person[];

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.peopleService.getPeople().subscribe((res) => {
      this.users = res.data;
    })
  }
}

