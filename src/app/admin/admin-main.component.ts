import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css']
})
export class AdminMainComponent implements OnInit {
  ngOnInit(): void {
    let body = document.querySelector(".body") as HTMLElement;
    let sidebar = document.querySelector(".sidebar") as HTMLElement;
    let toggle = document.querySelector(".toggle") as HTMLElement;
    let searchBtn = document.querySelector(".search-box") as HTMLElement;
    let modeSwitch = document.querySelector(".toggle-switch") as HTMLElement;
    let modeText = document.querySelector(".mode-text") as HTMLElement;
    
    toggle.addEventListener("click", () => {
      sidebar.classList.toggle("close");
    })
    modeSwitch.addEventListener("click", () => {
      body.classList.toggle("dark");
    })

  }

}
