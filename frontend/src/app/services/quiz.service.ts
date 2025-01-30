import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizService {
  private apiUrl = 'https://quiz-seu-dj-backend.vercel.app/api/questions';

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
