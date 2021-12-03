import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { PanelComponent } from './components/panel/panel.component';
import { PlantillaComponent } from './components/plantilla/plantilla.component';
import { ProductoComponent } from './components/producto/producto.component';

const routes: Routes = [
  {
    path: '',
    component: PlantillaComponent,
    children: [
      {
        path: '',
        component: PanelComponent
      },
      {
        path: 'producto',
        component: ProductoComponent
      },
      {
        path: 'categoria',
        component: CategoriaComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
