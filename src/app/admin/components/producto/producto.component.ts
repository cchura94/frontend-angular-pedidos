import { Component, OnInit } from '@angular/core';
import { ProductoService } from 'src/app/core/services/producto.service';
import { CategoriaService } from 'src/app/core/services/categoria.service';
import { Categoria } from 'src/app/core/interfaces/categoria'

import { FormGroup, FormControl } from '@angular/forms'
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
  lista_categorias: Categoria[] = []
  categoria: any;
  lista_subcategorias: any = []
  // imagenes
  imagen_seleccionada?: File
  nombre_imagen_seleccionada: string = "Ningun archivo seleccionado"

  // form reactive
  productoForm = new FormGroup({
    nombre: new FormControl(''),
    precio: new FormControl(''),
    cantidad: new FormControl(''),
    subcategoria_id: new FormControl(''),
    descripcion: new FormControl(''),
    imagen: new FormControl(''),
  })
  constructor(
    private prodService: ProductoService,
    private catService: CategoriaService
  ) { }

  ngOnInit(): void {
    this.listaProductos();
    this.listaCategorias();
  }

  listaProductos() {
    this.prodService.indexProducto().subscribe(
      (res: any) => {
        console.log(res)
        this.lista_productos = res.data
      }
    )
  }

  listaCategorias() {
    this.catService.getCategorias().subscribe(
      (res: Categoria[]) => {
        this.lista_categorias = res
      }
    )
  }

  seleccionCategoria(event: any) {
    console.log('event :' + event);
    console.log(event.value);
    this.categoria = {}
    this.catService.showCategoria(event.value).subscribe(
      (res: any) => {
        console.log(res)
        this.categoria = res
        this.lista_subcategorias = res.sub_categorias
      }
    )
  }
  imagenSeleccionada(fileInputEvent: any) {
    this.nombre_imagen_seleccionada = fileInputEvent.target.files[0].name
    this.imagen_seleccionada = fileInputEvent.target.files[0]
    this.productoForm.get('imagen')?.setValue(this.imagen_seleccionada);
    console.log(this.imagen_seleccionada)

  }
  

  openNuevoProducto() {
    this.product = {};
    this.submitted = false;
    this.productoDialog = true;
  }

  guardarProducto(){
    alert("eniando datos");
    this.prodService.storeProducto(this.productoForm).subscribe(
      (res: any) => {
        console.log(res);
      }
    )
  }

}
