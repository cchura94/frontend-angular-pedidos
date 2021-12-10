import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {ToastModule} from 'primeng/toast';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {CascadeSelectModule} from 'primeng/cascadeselect';
import {DropdownModule} from 'primeng/dropdown';
import {ToolbarModule} from 'primeng/toolbar';
import {RadioButtonModule} from 'primeng/radiobutton';
import {InputNumberModule} from 'primeng/inputnumber';

const modulos = [
  CommonModule,
  ButtonModule,
  TableModule,
  DialogModule,
  InputTextModule,
  InputTextareaModule,
  ToastModule,
  //MenuItem,
  MenubarModule,
  CascadeSelectModule,
  DropdownModule,
  ToolbarModule,
  RadioButtonModule,
  InputNumberModule
]

@NgModule({
  declarations: [],
  imports: modulos,
  exports: modulos
})
export class PrimengModule { }
