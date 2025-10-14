import { Component } from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';

@Component({
  selector: 'app-transitaire-form',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './transitaire-form.component.html',
  styleUrl: './transitaire-form.component.scss'
})
export class TransitaireFormComponent {
  constructor(private fb: FormBuilder) {}

  form = this.fb.group({
    raisonSociale: ['', [Validators.required, Validators.minLength(2)]],
    nif: ['', [Validators.required]],
    rccm: [''],
    email: ['', [Validators.email]],
    telephone: ['', [Validators.required]],
    adresse: [''],
    // …ajoute tes champs spécifiques
  });

  submitting = false;

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.submitting = true;

    // TODO: Appeler ton service (ex: TransitaireService.create(this.form.value))
    // .pipe(finalize(() => this.submitting = false))
    // .subscribe({ next: …, error: … });
    console.log('Payload:', this.form.value);
    this.submitting = false;
  }
}
