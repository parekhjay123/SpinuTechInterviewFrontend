import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExercisesService } from '../services/exercises.service';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-test-form',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule,CommonModule],
  templateUrl: './test-form.component.html',
  styleUrl: './test-form.component.css'
})
export class TestFormComponent {
  userForm: FormGroup;
  result:string='';
  constructor(private fb: FormBuilder,private exercise:ExercisesService) {
    // Create a form group with a control named 'amount'
    this.userForm = this.fb.group({
      amount: ['', Validators.required]  // Add validators as needed
    });
  }

  // Method to handle form submission
  convertAmount() {
    if (this.userForm.valid) {
      console.log('Form Value:', this.userForm.value);
      const amt = this.userForm.get('amount')?.value;
      this.exercise.convertAmountToWords(amt).subscribe(
        (data) => {
          this.result = data;
        },
        (error) => {
          this.result = 'Error converting amount';
        }
      );
  
    }
  }
}
