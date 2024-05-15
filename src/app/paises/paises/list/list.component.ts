import { Component, OnInit } from '@angular/core';
import { PaisesService } from '../paises.service';
import { PaisDetail } from '../../paises-detail';
import { Pais } from '../paises';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  selected: Boolean = false;
  selectedPais!: Pais;

 
  paises: Array<PaisDetail> = [];
  paisMasAntiguo: PaisDetail | undefined;

  constructor(private paisesService: PaisesService) { }

  getPaises(): void {
    this.paisesService.getPaises().subscribe(a => {
      this.paises = a;
      this.paisMasAntiguo = this.calcularPaisMasAntiguo();
    });
  }

  ngOnInit() {
    this.getPaises();
  }

  calcularPaisMasAntiguo(): PaisDetail | undefined {
    let paisMasAntiguo: PaisDetail | undefined;

    for (let pais of this.paises) {
      if (!paisMasAntiguo || pais.formation_year < paisMasAntiguo.formation_year) {
        paisMasAntiguo = pais;
      }
    }

    return paisMasAntiguo;
  }


  
  onSelected(pais: PaisDetail): void {
    this.selected = true;
    this.selectedPais = pais;
  }


}
