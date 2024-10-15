import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExercisesService {

  private apiUrl = 'http://localhost:5101/home/exercise1'; // Update with your API URL
  private apiex3 = 'http://localhost:5101/home/exercise3'; // Update with your API URL

  constructor(private http: HttpClient) { }

  convertAmountToWords(amount: number): Observable<string> {
    return this.http.get(`${this.apiUrl}/${amount}`, { responseType: 'text' });
  }
  exercise3(amount: number): Observable<number[][]> {
    return this.http.get<number[][]>(`${this.apiex3}/${amount}`);
  }
}
