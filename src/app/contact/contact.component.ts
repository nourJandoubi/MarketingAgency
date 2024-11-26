import { Component } from '@angular/core';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ContactService } from 'src/contact.service';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder, private contactService:ContactService ,private snackBar: MatSnackBar) {
      this.contactForm = this.fb.group({
          name: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          subject: ['', Validators.required],
          message: ['', Validators.required]
      });
  }

  ngOnInit(): void {}

  
  onSubmit(formData: any) {
    this.snackBar.open('Message sent successfully!', 'Close', {
      duration: 2000, // Duration in milliseconds
      panelClass: 'custom-snackbar',
    });
    console.log(formData);
    this.contactService.sendEmail(formData).subscribe(
      response => {
        console.log('Mail sent successfully', response);
      },
      error => {
       
      }
    );
  }
}


