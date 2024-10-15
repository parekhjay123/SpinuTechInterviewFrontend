import { Component } from '@angular/core';
import { TestFormComponent } from './test-form/test-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ExercisesService } from './services/exercises.service';
import { Exercise2Component } from './exercise2/exercise2.component';
import { Exercise3Component } from './exercise3/exercise3.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TestFormComponent,HttpClientModule,Exercise2Component, Exercise3Component,CommonModule],
  providers: [ExercisesService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'test-reactive-forms';
  selectedExercise: string = '';

  // Function to set the selected exercise
  selectExercise(exercise: string) {
    this.selectedExercise = exercise;
  }
}
