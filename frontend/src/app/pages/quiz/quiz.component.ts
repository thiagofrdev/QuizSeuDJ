import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'app-quiz',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './quiz.component.html',
  styleUrl: './quiz.component.css'
})
export class QuizComponent implements OnInit {
  questions: any[] = [];

  constructor(private quizService: QuizService) {}

  ngOnInit(): void {
      this.loadQuestions();
  }

  loadQuestions(): void {
    this.quizService.getQuestions().subscribe({
      next: (data) => {
        this.questions = data;
        console.log('Perguntas carregadas:', this.questions);
      },
      error: (err) => {
        console.error('Erro ao carregar perguntas:', err);
      }
    });
  }
}
