import { Injectable } from '@angular/core';
import { peopleMockData } from '../mocks/mock-data';
import { Observable, of } from 'rxjs';
import { HttpClient} from '@angular/common/http';
import { ResultSet } from '../models/result-set';
import { Person } from '../models/person';

@Injectable({ providedIn: 'root' })
export class PeopleService {

  private enpoint = 'https://reqres.in/api/users'

  constructor( private http: HttpClient) { }

  getPeople(): Observable<ResultSet<Person>> {
    /* return of(peopleMockData); */
    return this.http.get<ResultSet<Person>>(this.enpoint)
  }

}
