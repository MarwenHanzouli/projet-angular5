import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-edit-appareil-component',
  templateUrl: './edit-appareil-component.component.html',
  styleUrls: ['./edit-appareil-component.component.css']
})
export class EditAppareilComponentComponent implements OnInit {

  defaultOnOff = 'éteint';

  constructor() { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    console.log(form.value);
    const name = form.value['name'];
    const status = form.value['status'];
  }
}
