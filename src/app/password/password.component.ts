import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  isPasswordVisible: boolean = false;
  logs = [];

  constructor() { }

  ngOnInit(): void {
  }

  togglePasswordVisibility(){
    this.logs = [...this.logs, new Date().getTime().toString()];
    this.isPasswordVisible = !this.isPasswordVisible;
  }

  getBackgroundColor(){
    return this.logs.length >= 5 ? 'blue': 'none';
  }
}
