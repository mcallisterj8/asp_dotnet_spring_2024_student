import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { first } from 'rxjs';
import { EmailLoginDetails } from '../../models/email-login-details';

@Component({
  selector: 'app-login',
  // standalone: true,
  // imports: [CommonModule, RouterModule, FormsModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  private _formBuilder = inject(FormBuilder);
  private _route = inject(ActivatedRoute);
  private _router = inject(Router);
  private _authService = inject(AuthService);

  public loginForm: FormGroup;
  public loading:boolean = false;
  public submitted: boolean = false;
  public returnUrl: string = "";

  constructor() {
    this.loginForm = this._formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.returnUrl = "";

  }

  ngOnInit(): void {                        
    // get return url from route parameters or default to '/'
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/';        
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }

    // Create an instance of our EmailLoginDetails model to send to the
    // backend server. This EmailLoginDetails object is of the structure the server
    // expects to receive.
    const credentials: EmailLoginDetails = {
      email: this.f['username'].value, 
      password: this.f['password'].value
    }

    this.loading = true;

    this._authService.login(credentials)
        .pipe(first())
        .subscribe(
            data => {                                        
                if(!data){
                    this.loading = false;
                    this.loginForm.reset();
                }else{
                    this._router.navigate([this.returnUrl]);
                }
                
            },
            error => {
                this.loading = false;
            });
    }

}
