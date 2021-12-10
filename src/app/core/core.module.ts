import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginService } from './services/login.service';
import { CategoriaService } from './services/categoria.service';
import { SubcategoriaService } from './services/subcategoria.service';
import { ProductoService } from './services/producto.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    LoginService,
    CategoriaService,
    SubcategoriaService,
    ProductoService
  ]
})
export class CoreModule { }
