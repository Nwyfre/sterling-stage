import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { IftaLabelModule } from 'primeng/iftalabel';
import { ButtonModule } from 'primeng/button';
import { ApiService } from '../Shared/api/api.service';
import { catchError, EMPTY, of, tap } from 'rxjs';

@Component({
  selector: 'app-subscribe',
  imports: [ReactiveFormsModule, InputTextModule, IftaLabelModule , ButtonModule],
  templateUrl: './subscribe.component.html',
  styleUrl: './subscribe.component.scss'
})
export class SubscribeComponent {

  private apiService: ApiService = inject(ApiService);

  protected subForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required])
  });

  protected onSubmit(): void {
    if(!this.subForm.valid) {
      console.log('Invalid form data');
      console.log(this.subForm)
      return;
    }

    this.apiService.subscribe(this.subForm.value).pipe(
      tap(_ => console.log('Submit completed')),
      catchError(err => {
        console.log('Error subscribing', err);
        return of(EMPTY)
      }),
    ).subscribe(_ => this.subForm.reset());
  }
}
