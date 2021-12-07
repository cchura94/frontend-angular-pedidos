import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { CategoriaComponent } from './components/categoria/categoria.component';
import { ProductoComponent } from './components/producto/producto.component';
import { PlantillaComponent } from './components/plantilla/plantilla.component';
import { PanelComponent } from './components/panel/panel.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CoreModule } from '../core/core.module';
import { AuthInterceptorService } from '../auth-interceptor.service';


@NgModule({
  declarations: [
    CategoriaComponent,
    ProductoComponent,
    PlantillaComponent,
    PanelComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    CoreModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ]
})
export class AdminModule { }
