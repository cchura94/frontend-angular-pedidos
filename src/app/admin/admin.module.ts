import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { ProductoComponent } from './components/producto/producto.component';
import { PlantillaComponent } from './components/plantilla/plantilla.component';
import { PanelComponent } from './components/panel/panel.component';


@NgModule({
  declarations: [
    CategoriaComponent,
    ProductoComponent,
    PlantillaComponent,
    PanelComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
