import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  subscriptions = ['Basic', 'Advance', 'Pro'];
  selectedSubscription = 'Advance';
  submitted = false;

  @ViewChild('signUpForm', { static: false }) sgnForm: NgForm;

  formDetails = {
    email: '',
    subscription: ''
  };

  onSubmit() {
    console.log(this.sgnForm.value);
    this.submitted = true;

    this.formDetails.email = this.sgnForm.value.email;
    this.formDetails.subscription = this.sgnForm.value.subscription;
    this.sgnForm.reset();
  }
}
