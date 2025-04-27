import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Shows } from '../../../models/show.model';
import { Observable } from 'rxjs';
import { Outlet } from '../../../models/outlet.model';

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
}
