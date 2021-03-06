import { isLoweredSymbol } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor(
    private router: Router
  ) {  }

  isLoggedIn: boolean = false;
  userName?: string;
  role?:string;

  ngOnInit(): void {
    
    if (localStorage.getItem('UserName') != null || sessionStorage.getItem('UserName') != null) {
      this.isLoggedIn = true;

      if (localStorage.getItem('UserName')?.toString() != null) {
        this.userName = localStorage.getItem('UserName')?.toString();
      }
      else if (sessionStorage.getItem('UserName')?.toString() != null) {
        this.userName = sessionStorage.getItem('UserName')?.toString();
      }

      if (localStorage.getItem('role')?.toString() != null) {
        this.role = localStorage.getItem('role')?.toString();
      }
      else if (sessionStorage.getItem('role')?.toString() != null) {
        this.role = sessionStorage.getItem('role')?.toString();
      }
    }


  }

  logout() {
    if (localStorage.getItem('UserName') != null || sessionStorage.getItem('UserName') != null) {
      localStorage.removeItem('UserName');
      sessionStorage.removeItem('UserName');
      this.isLoggedIn = false;
    }

    if (localStorage.getItem('token') != null || sessionStorage.getItem('token') != null) {
      sessionStorage.removeItem('token');
      localStorage.removeItem('token');
      //this.isLoggedIn = false;
    }

    if (localStorage.getItem('role') != null || sessionStorage.getItem('role') != null) {
      sessionStorage.removeItem('role');
      localStorage.removeItem('role');
      //this.isLoggedIn = false;
    }
    //window.location.reload();
    this.router.navigate(['']);
  }

}
