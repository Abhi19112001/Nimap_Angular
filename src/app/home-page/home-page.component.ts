import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
import { User } from '../user';

export interface Tags {
  display: string;
  value: number;
}
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css',
})
export class HomePageComponent implements OnInit {
  id: string;

  constructor(
    private fb: FormBuilder,
    private us: UserServiceService,
    private rout: Router
  ) {}

  // visible = true;
  // selectable = true;
  // removable = true;
  // addOnBlur = true;
  //readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  myTag: Tags[] = [];
  age: number = 0;
  profilePhoto = null;
  registerForm: FormGroup;
  homeHide: boolean = true;
  profdata: boolean;
  companyHide: boolean = true;
  imageValid: boolean = true;
  ngOnInit() {
    this.registerForm = this.fb.group({
      firstName: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z]{1,20}$')],
      ],
      lastName: ['', Validators.required],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^[0-9]*[a-zA-Z]([-.w]*[0-9a-zA-Z])*@([a-zA-Z][-w.]*[0-9a-zA-Z].)+[a-zA-Z]{2,9}$'
          ),
        ],
      ],
      contactNo: ['', [Validators.required, Validators.pattern('^[0-9]{10}$')]],
      age: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      address: ['', Validators.required],
      address1: [{ value: '', disabled: true }, Validators.required],
      address2: [{ value: '', disabled: true }, Validators.required],
      companyAddress1: [{ value: '', disabled: true }, Validators.required],
      companyAddress2: [{ value: '', disabled: true }, Validators.required],
      tags: [],
      newsLetter: [''],
      profilePhoto: ['', Validators.required],
    });
  }
  rangedata(agevalue) {
    this.age = agevalue.target.value;
  }
  displayAddress(address) {
    if (address == '1') {
      this.companyHide = true;
      this.homeHide = false;
      this.registerForm.controls['address1'].enable();
      this.registerForm.controls['address2'].enable();
      this.registerForm.controls['companyAddress1'].disable();
      this.registerForm.controls['companyAddress2'].disable();
    }
    if (address == '2') {
      this.homeHide = true;
      this.companyHide = false;
      this.registerForm.controls['companyAddress1'].enable();
      this.registerForm.controls['companyAddress2'].enable();
      this.registerForm.controls['address1'].disable();
      this.registerForm.controls['address2'].disable();
    }
  }
  imagePreview(event) {
    if (event.target.files && event.target.files[0]) {
      this.checkres(event);
      var reader = new FileReader();
      reader.onload = (event) => {
        this.profilePhoto = (<FileReader>event.target).result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
  }
  checkres(event) {
    let file = event.target.files && event.target.files[0];
    var img = new Image();
    img.src = window.URL.createObjectURL(file);
    var data: boolean = true;
    var me = this;
    img.onload = function () {
      var width = img.naturalWidth,
        height = img.naturalHeight;
      window.URL.revokeObjectURL(img.src);
      if (width == 310 && height == 325) {
        me.imageValid = true;
      } else {
        me.imageValid = false;
      }
    };
  }
  submitregisterForm(formvalue: User) {
    formvalue.profilePhoto = this.profilePhoto;
    console.log(formvalue.tags);
    //formvalue.tags = JSON.stringify(this.myTag);
    this.us.insertData(formvalue).subscribe((res) => {
      this.rout.navigate(['profile/' + res['id']]);
    });
  }
  closeModal() {
    this.ngOnInit();
  }
  // add(event: MatChipInputEvent): void {
  //   const input = event.input;
  //   const value = event.value;

  //   // Add our Tag
  //   if ((value || '').trim()) {
  //     this.myTag.push({ name: value.trim() });
  //   }

  //   // Reset the input value
  //   if (input) {
  //     input.value = '';
  //   }
  // }

  // remove(tags: Tags): void {
  //   const index = this.myTag.indexOf(tags);

  //   if (index >= 0) {
  //     this.myTag.splice(index, 1);
  //   }
  // }
}
