import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  menuButton:boolean=false;
  constructor() { }

  ngOnInit() {
  }
  openMobileNav(e:any){
   
    document.getElementById("mobile-nav").style.display="flex"
    document.getElementById("mobile-container").style.display="none"
  }
  closeMobileNav(){
  document.getElementById("mobile-nav").style.display="none"
  document.getElementById("mobile-container").style.display="block"
}
}

