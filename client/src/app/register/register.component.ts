import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Output() cancelValue = new EventEmitter<boolean>();

  model: any = {};

  constructor(private accountSerive: AccountService, private toastr: ToastrService) {}

  ngOnInit() {
  }

  register() {
    this.accountSerive.register(this.model).subscribe(response => {
      this.cancel();
    },
    err => {
      console.log(err)
      this.toastr.error(err.error)
    })
  }

  cancel() {
    return this.cancelValue.emit(false);
  }
}
