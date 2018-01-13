import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormBuilder,FormsModule } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { RegistrationService } from './registration.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;


  constructor(private fb: FormBuilder, private registrationService: RegistrationService,private router:Router) { }

  ngOnInit() {
    this.registrationForm = this.fb.group({
      name: "",
      email: "",
      password: ""
    })
  }

  createUsers() {
    let m = Object.assign(this.registrationForm.value);
    this.registrationService.saveUsers(m).subscribe(
      (res)=>console.log(res)
    );
    this.router.navigate(['/userslist']);
    
  }

}
