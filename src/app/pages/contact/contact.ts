import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ContentService } from '../../core/services/content.service';
import { CtaButton } from '../../shared/components/cta-button/cta-button';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
})
export class Contact {
  
}
