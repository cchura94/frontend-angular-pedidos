import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

  items: any[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
          label:'INICIO',
          icon:'pi pi-fw pi-home',
          routerLink:"/"
      },
      {
          label:'PRODUCTOS',
          icon:'pi pi-fw pi-product',
          routerLink:"/productos"
      },
      {
          label:'INGRESAR',
          icon:'pi pi-fw pi-user',
          routerLink:"/auth/login"
      }
    ]
  }

}
