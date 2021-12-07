import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { PanelComponent } from './components/panel/panel.component';
import { PlantillaComponent } from './components/plantilla/plantilla.component';
import { ProductoComponent } from './components/producto/producto.component';

const routes: Routes = [
  {
    path: '',
    component: PlantillaComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        component: PanelComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'producto',
        component: ProductoComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'categoria',
        component: CategoriaComponent,
        canActivate: [AuthGuard]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
