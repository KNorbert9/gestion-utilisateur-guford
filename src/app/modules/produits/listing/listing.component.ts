import { Component, inject } from '@angular/core';
import { AppService } from '../services/app.service';
import { CardBodyComponent, CardComponent, FormControlDirective, ListGroupDirective, ListGroupItemDirective } from '@coreui/angular';
import { TruncatePipe } from '../../../truncate.pipe';
import {Router, RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-listing',
  imports: [CardComponent, CardBodyComponent, CommonModule, RouterLink, FormControlDirective, ReactiveFormsModule, FormsModule, ListGroupDirective, ListGroupItemDirective, RouterOutlet, RouterLinkActive],
  templateUrl: './listing.component.html',
  styleUrl: './listing.component.scss'
})
export class ListingComponent {}
