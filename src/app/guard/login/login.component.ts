import {Component, OnInit} from '@angular/core';
import {NgxIndexedDBService} from "ngx-indexed-db";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
    constructor(private dbService: NgxIndexedDBService) {
    }

  ngOnInit(): void {

  }



}
