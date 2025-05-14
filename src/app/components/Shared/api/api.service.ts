import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Shows } from '../../../models/show.model';
import { Observable } from 'rxjs';
import { Outlet } from '../../../models/outlet.model';
import { Schedule } from '../../../models/schedule.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient){ 
    
  }

  public getShows(): Observable<Shows[]>  {
    return this.httpClient.get<Shows[]>('https://yp3ecox5yf.execute-api.us-east-2.amazonaws.com/dev/shows');
  }

  public getOutlets(): Observable<Outlet[]> {
    return this.httpClient.get<Outlet[]>('https://yp3ecox5yf.execute-api.us-east-2.amazonaws.com/dev/outlets');
  }

  public getSchedule(id: number): Observable<Schedule> {
    return this.httpClient.get<Schedule>(`https://yp3ecox5yf.execute-api.us-east-2.amazonaws.com/dev/shows/schedule/${id}`);
  }

  public subscribe(subData: {name: string, email: string}): Observable<any> {
    console.log('Subscribing...')
    return this.httpClient.post('https://6qjlp4avk1.execute-api.us-east-2.amazonaws.com/dev/signup', subData);
  }
}
