import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-restore-password',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './restore-password.component.html',
  styleUrl: './restore-password.component.css',
})
export class RestorePasswordComponent  {

  showFirstPart: boolean = true;
  showPassword1: boolean = false;
  showPassword2: boolean = false;
  showPassword3: boolean = false;



  continue() {
    this.showFirstPart = false;
  }
  togglePassword1(){
    this.showPassword1 = !this.showPassword1;
  }

  togglePassword2(){
    this.showPassword2 = !this.showPassword2;
  }
  togglePassword3(){
    this.showPassword3 = !this.showPassword3;
  }


}

