import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {



  showPassword1: boolean = false;
  
  togglePassword1() {
    this.showPassword1 = !this.showPassword1;
  }
}
