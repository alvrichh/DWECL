import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConsultapaisesService {
  private apiUrl = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  fetchData(continente : string): Observable<any>{
    return this.http.get<any>(`${this.apiUrl}/region/${continente}`)
  }
}
