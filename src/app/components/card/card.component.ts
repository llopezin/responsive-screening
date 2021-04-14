import { Component, Input, OnInit } from '@angular/core';
import { Person } from 'src/app/models/person';
import { PeopleService } from 'src/app/services/people.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() user: Person;

  constructor() { }

  ngOnInit(): void {
    

  }


}
