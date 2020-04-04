import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidator } from './custom-validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  projectForm: FormGroup;

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectname': new FormControl(null, [Validators.required, CustomValidator.invalidProjectName]
        , CustomValidator.asyncInvalidProjectName),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('critical'),
    });

    this.projectForm.statusChanges.subscribe(value => {
      console.log(value);
    });
  }

  onSubmitProject() {
    console.log(this.projectForm.value);
  }

}
