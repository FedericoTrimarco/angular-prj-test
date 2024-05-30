import { Component } from '@angular/core';
import { HookFunctions } from '../../generic/hookFunctions';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { window } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrl: './form-group.component.scss'
})
export class FormGroupComponent {

  form: FormGroup = this.fb.group({});

  constructor(
    private fb: FormBuilder,
    protected router: Router
  ){
    let ref = this;
    
    ref.setupForm();
  }

  setupForm(){
    let ref = this;

    ref.form = ref.fb.group(
      {
        nome: new FormControl("", Validators.required),
        cognome: new FormControl("", Validators.required),
        anni: new FormControl("", Validators.required),
        cittaNatale: new FormControl("", Validators.required),
      }
    )
  }

  routeTo(path: any) {
    let ref = this;

    ref.router.navigate([path]);
  }
}
