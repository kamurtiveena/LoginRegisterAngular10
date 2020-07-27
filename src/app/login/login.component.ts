import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { LoginInfo } from './login.interface';
import { FormBuilder, FormControl, Validators, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  data: LoginInfo;
  options: FormGroup;
  hide = true;
  colorControl = new FormControl('primary');
  fontSizeControl = new FormControl(16, Validators.min(10));

  constructor(private loginService: LoginServiceService, fb: FormBuilder) {
    this.options = fb.group({
      color: this.colorControl,
      fontSize: this.fontSizeControl,
      username: new FormControl(),
      password: new FormControl()
    });
  }

  getFontSize() {
    return Math.max(10, this.fontSizeControl.value);
  }

  ngOnInit(): void {
  }

  getLogin() {
    console.log(this.options);
  }

}
