import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelValue = new EventEmitter<boolean>();

  model: any = {};

  constructor(private accountSerive: AccountService) {}

  ngOnInit() {
  }

  register() {
    this.accountSerive.register(this.model).subscribe(response => {
      this.cancel();
    },
    err => console.log(err));
  }

  cancel() {
    return this.cancelValue.emit(false);
  }
}
