import { Component, OnInit } from '@angular/core';
import { ClientService } from '../../services/client.service'; 
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Client } from '../../models/Client';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {
  id:string:
  client:Client{
    firstName:'',
    lastName: '',
    email:'',
    phone:'',
    balance:0
  }
  disableBalanceOnEdit:boolean = true;
  
  constructor() { }

  ngOnInit() {
  }

}
