import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-exercise2',
  standalone: true,
  imports: [ReactiveFormsModule,HttpClientModule,CommonModule],
  templateUrl: './exercise2.component.html',
  styleUrl: './exercise2.component.css'
})
export class Exercise2Component {
  palindromeForm: FormGroup;
  result: string = '';

  constructor(private fb: FormBuilder) {
    // Create the form with an 'amount' control
    this.palindromeForm = this.fb.group({
      number: ['', [Validators.required, Validators.min(0)]]
    });
  }

  // Function to check if the number is a palindrome
  isPalindrome(num: number): boolean {
    const str = num.toString();
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  }

  // Function to handle form submission
  checkPalindrome() {
    const number = this.palindromeForm.get('number')?.value;
    if (this.palindromeForm.valid) {
      if (this.isPalindrome(number)) {
        this.result = `The number ${number} is a palindrome! 🎉`;
      } else {
        this.result = `The number ${number} is not a palindrome. 😔`;
      }
    }
  }
}
