import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../services/authentication/authentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  showLoginForm = false;
  constructor(private fb: FormBuilder, private authService: AuthenticationService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }
  login(username: string, password: string) {
    this.authService.login(username, password).subscribe(
      (user: any) => {
        // Check user role and navigate accordingly
        if (user && user.length > 0) {
          const role = user[0].role;
          if (role === 'user') {
            this.router.navigate(['user']);
          } else if (role === 'admin') {
            this.router.navigate(['admin']);
          }
        } else {
          alert("invalid credentials!")
        }
      },
      (error) => {
        console.error('Login error:', error);
      }
    );
  }
  initForm(): void {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  // onSubmit(): void {
  //   if (this.loginForm.valid) {
  //     // Process login logic here
  //     console.log('Login successful!', this.loginForm.value);
  //   } else {
  //     console.log('Form is invalid. Please check your input.');
  //   }
  // }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.login(this.loginForm.value.email, this.loginForm.value.password);
    } else {
      console.log('Form is invalid. Please check your input.');
    }
  }
  toggleLoginForm(): void {
    this.showLoginForm = !this.showLoginForm;
    // Reset form when opening/closing
    if (!this.showLoginForm) {
      this.loginForm.reset();
    }
  }
}
