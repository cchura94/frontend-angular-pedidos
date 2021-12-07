import { Component, OnInit } from '@angular/core';
import { CategoriaService } from 'src/app/core/services/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  constructor(private categoriaService: CategoriaService) { }

  ngOnInit(): void {
    this.listarCategorias();
  }

  listarCategorias(){
    this.categoriaService.getCategorias().subscribe(
      (datos:any) => {
        console.log(datos)
      },
      (error) => {
        console.log("error");
      }
    )
  }

}
