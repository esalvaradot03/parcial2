import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaisesComponent } from './paises.component';
import { PaisDetail } from '../../paises-detail';
import { ListComponent } from '../list/list.component';

@NgModule({
  
  imports: [
    CommonModule
  ],
  declarations: [PaisesComponent]
})
export class PaisesModule { }
