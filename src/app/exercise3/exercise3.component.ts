import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExercisesService } from '../services/exercises.service';

@Component({
  selector: 'app-exercise3',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule,CommonModule],
  templateUrl: './exercise3.component.html',
  styleUrl: './exercise3.component.css'
})
export class Exercise3Component {
  gameBoard: number[][] = [];
  rows = 5;
  cols = 5;
  userForm: FormGroup;
  result:string='';
  constructor(private http: HttpClient, private exercise:ExercisesService,private fb: FormBuilder) {
    this.userForm = this.fb.group({
      number: ['', Validators.required]  // Add validators as needed
    });
  }

  inputNumber: number = 0;
  spiralMatrix: number[][] = [];

  // Function to call the backend API and generate the spiral matrix
  generateSpiral() {
    if (this.userForm.valid) {
      const number = this.userForm.get('number')?.value;
      this.exercise.exercise3(number).subscribe(
        (response) => {
          this.spiralMatrix = response;  
        },
        (error) => {
          console.error('Error generating spiral:', error);
        }
      );
    }
  }
}
