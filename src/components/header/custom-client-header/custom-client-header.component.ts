import { NgOptimizedImage } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonDirective } from '@coreui/angular';

@Component({
  selector: 'app-custom-client-header',
  imports: [ButtonDirective, NgOptimizedImage],
  templateUrl: './custom-client-header.component.html',
  styleUrl: './custom-client-header.component.scss',
})
export class CustomClientHeaderComponent {}
