import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/core/services/producto.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  productoDialog: boolean = false;
  lista_productos: any[] = [];
  product: any;
  productos_seleccionados: any[] = [];
  // solo prueba
  submitted: boolean = false;
  statuses: any[] = [];

  constructor(private prodService: ProductoService) { }

  ngOnInit(): void {
    this.prodService.indexProducto().subscribe(
      (res:any) => {
        console.log(res)
        this.lista_productos = res.data
      }
    )
  }

  openNuevoProducto(){
    this.product = {};
    this.submitted = false;
    this.productoDialog = true;
  }

}
