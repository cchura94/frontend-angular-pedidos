import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Categoria } from 'src/app/core/interfaces/categoria';
import { CategoriaService } from 'src/app/core/services/categoria.service';
import { SubcategoriaService } from 'src/app/core/services/subcategoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css'],
  providers: [MessageService]
})
export class CategoriaComponent implements OnInit {

  lista_categorias:Categoria[] = [];
  display: boolean = false;
  displaySub: boolean = false;  
displaySubcategorias:boolean = false
subcategorias_list:any = {};
cargando: boolean = true

  categoriaForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    detalle: new FormControl('')
  })

  subcategoriaForm = new FormGroup({
    nombre: new FormControl('', Validators.required),
    categoria_id: new FormControl('')
  })


  constructor(private categoriaService: CategoriaService, 
              private messageService: MessageService,
              private subCatService: SubcategoriaService) { }

  ngOnInit(): void {
    this.listarCategorias();
  }

  listarCategorias(){
    this.categoriaService.getCategorias().subscribe(
      (datos:Categoria[]) => {
        console.log(datos)
        this.lista_categorias = datos
      },
      (error) => {
        console.log("error");
      }
    )
  }

  abrirNuevoCategoriaDialog(){
    this.display = true;
  }

  abrirNuevoSubCategoriaDialog(){
    this.displaySub = true;
  }

  showSubCategoriasDialog(id:number){
    this.cargando = true
    this.subcategorias_list = {};
    this.displaySubcategorias = true
    this.mostrarCategoria(id);
  }

  guardarCategoria(){
    this.categoriaService.storeCategoria(this.categoriaForm.value).subscribe(
      (datos: any) => {
        // this.listarCategorias()
        this.lista_categorias.push(datos.data)
        this.display = false
        this.mostrarToast(datos.mensaje)
      },
      (error) => {
        
      }
    )    
  }

  guardarSubCategoria(){
    this.subCatService.storeSubCategoria(this.subcategoriaForm.value).subscribe(
      (datos: any) => {
        // this.listarCategorias()
        // this.lista_categorias.push(datos.data)
        this.displaySub = false
        this.mostrarToast(datos.mensaje)
      },
      (error) => {
        
      }
    )  
  }

  mostrarCategoria(id: number){
    this.categoriaService.showCategoria(id).subscribe(
      (datos: any) => {
        // this.listarCategorias()
        // this.lista_categorias.push(datos.data)
        this.subcategorias_list = datos
        
        this.cargando =false
      },
      (error) => {
        
      }
    )  
  }

  mostrarToast(valor: string) {
        this.messageService.add({severity:'success', summary:valor, detail:'Correcto'});
    }


}
