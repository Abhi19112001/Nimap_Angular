import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrl: './user-registration.component.css',
})
export class UserRegistrationComponent implements OnInit {
  constructor(private fb: FormBuilder, private us: UserServiceService ) {}
  registrationForm: FormGroup;
  states = [
    { label: 'Andhra Pradesh', value: 'Andhra Pradesh' },
    { label: 'Arunachal Pradesh', value: 'Arunachal Pradesh' },
    { label: 'Assam', value: 'Assam' },
    { label: 'Bihar', value: 'Bihar' },
    { label: 'Chhattisgarh', value: 'Chhattisgarh' },
    { label: 'Goa', value: 'Goa' },
    { label: 'Gujarat', value: 'Gujarat' },
    { label: 'Haryana', value: 'Haryana' },
    { label: 'Himachal Pradesh', value: 'Himachal Pradesh' },
    { label: 'Jharkhand', value: 'Jharkhand' },
    { label: 'Karnataka', value: 'Karnataka' },
    { label: 'Kerala', value: 'Kerala' },
    { label: 'Madhya Pradesh', value: 'Madhya Pradesh' },
    { label: 'Maharashtra', value: 'Maharashtra' },
    { label: 'Manipur', value: 'Manipur' },
    { label: 'Meghalaya', value: 'Meghalaya' },
    { label: 'Mizoram', value: 'Mizoram' },
    { label: 'Nagaland', value: 'Nagaland' },
    { label: 'Odisha', value: 'Odisha' },
    { label: 'Punjab', value: 'Punjab' },
    { label: 'Rajasthan', value: 'Rajasthan' },
    { label: 'Sikkim', value: 'Sikkim' },
    { label: 'Tamil Nadu', value: 'Tamil Nadu' },
    { label: 'Telangana', value: 'Telangana' },
    { label: 'Tripura', value: 'Tripura' },
    { label: 'Uttar Pradesh', value: 'Uttar Pradesh' },
    { label: 'Uttarakhand', value: 'Uttarakhand' },
    { label: 'West Bengal', value: 'West Bengal' },
    // Union Territories
    { label: 'Andaman and Nicobar Islands', value: 'AN' },
    { label: 'Chandigarh', value: 'CH' },
    { label: 'Dadra and Nagar Haveli and Daman and Diu', value: 'DN' },
    { label: 'Lakshadweep', value: 'LD' },
    { label: 'Delhi', value: 'DL' },
    { label: 'Puducherry', value: 'PY' },
    { label: 'Ladakh', value: 'LA' },
  ];
  countries = [
    { label: 'India', value: 'India' },
    { label: 'United States', value: 'United States' },
    { label: 'United Kingdom', value: 'United Kingdom' },
    { label: 'Canada', value: 'Canada' },
    { label: 'Australia', value: 'Australia' },
    // Add more countries as needed
  ];
  ngOnInit() {
    this.registrationForm = this.fb.group({
      photo: [null], // Handle photo data separately
      firstname: [
        '',
        [Validators.pattern('[a-zA-Z ]*'), Validators.maxLength(20)],
      ],
      lastname: ['', [Validators.required]],
      email: ['', [Validators.email, Validators.required]],
      contact: ['', [Validators.required]],
      age: ['', Validators.required],
      state: ['', [Validators.required]],
      country: ['', [Validators.required]],
      address: ['', Validators.required],
    });
  }

  onFileChange(event) {}

  onSubmit() {
    this.us.saveUser(this.registrationForm.value).subscribe();
    alert('user add sucesfully');
    
  }
}
