import { Component } from '@angular/core';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
})
export class QuizComponent {
  HandleAnswerButtonClick(opt: any): void {
    if (this.currentQuestion < this.questions.length - 1) {
      this.showScore = false
      this.currentQuestion += 1
      if (opt.isCorrect == true) {
        this.score++
      } else if (opt.isCorrect == false) {
        this.score + -0
      }
    } else if (this.currentQuestion == this.questions.length - 1) {
      if (opt.isCorrect == true) {
        this.score++
      } else if (opt.isCorrect == false) {
        this.score + -0
      }
      this.showScore = true
    }
  }

  headerProperty = 'Camillas quiz'
  score = 0
  currentQuestion = 0
  showScore = false
  questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York", isCorrect: false },
        { answerText: "London", isCorrect: false },
        { answerText: "Paris", isCorrect: true },
        { answerText: "Dublin", isCorrect: false },
      ],
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos", isCorrect: false },
        { answerText: "Elon Musk", isCorrect: true },
        { answerText: "Bill Gates", isCorrect: false },
        { answerText: "Tony Stark", isCorrect: false },
      ],
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple", isCorrect: true },
        { answerText: "Intel", isCorrect: false },
        { answerText: "Amazon", isCorrect: false },
        { answerText: "Microsoft", isCorrect: false },
      ],
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1", isCorrect: false },
        { answerText: "4", isCorrect: false },
        { answerText: "6", isCorrect: false },
        { answerText: "7", isCorrect: true },
      ],
    }
  ]
}
