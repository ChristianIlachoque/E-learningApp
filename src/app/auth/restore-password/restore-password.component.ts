import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-restore-password',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, CommonModule],
  templateUrl: './restore-password.component.html',
  styleUrl: './restore-password.component.css',
})
export class RestorePasswordComponent {
  restoreForm: FormGroup;

  constructor(private form: FormBuilder) {
    this.restoreForm = this.form.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }

  showFirstPart: boolean = true;
  showPassword1: boolean = false;
  showPassword2: boolean = false;
  showPassword3: boolean = false;

  continue() {
    this.showFirstPart = false;
  }
  togglePassword1() {
    this.showPassword1 = !this.showPassword1;
  }

  togglePassword2() {
    this.showPassword2 = !this.showPassword2;
  }
  togglePassword3() {
    this.showPassword3 = !this.showPassword3;
  }

  handleSubmitEmail() {
    console.log(this.restoreForm.value);
    this.showFirstPart = false;
  }

  hasErrors(controlName: string, errorType: string) {
    return (
      this.restoreForm.get(controlName)?.hasError(errorType) &&
      this.restoreForm.get(controlName)?.touched
    );
  }

  wasTouched(controlName: string) {
    return !this.restoreForm.get(controlName)?.touched;
  }
}
