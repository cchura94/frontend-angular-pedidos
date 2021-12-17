import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  url = environment.url_local_api

  constructor(private http:HttpClient) { }

  indexProducto(page:any){
    /*if(!page){
      page = 1      
    }*/
    return this.http.get(`${this.url}/producto?page=${page}`);
  }

  storeProducto(datos: FormGroup){
    const formData: FormData = new FormData();
    formData.append('nombre', datos.value.nombre)
    formData.append('precio', datos.value.precio)
    formData.append('cantidad', datos.value.cantidad)
    formData.append('descripcion', datos.value.descripcion)
    formData.append('subcategoria_id', datos.value.subcategoria_id)
    formData.append('imagen', datos.get('imagen')?.value)
    
    return this.http.post(`${this.url}/producto`, formData);

  }
}
