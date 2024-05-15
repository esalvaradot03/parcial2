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

  constructor(private paisesService: PaisesService) { }

  getPaises(): void {
    this.paisesService.getPaises().subscribe(a => {this.paises = a});

  }

  ngOnInit() {
    this.getPaises();
  }
  
  getpaisviejo(): number {
    let paisviejo = this.paises[0];
    for (let i = 1; i < this.paises.length; i++) {
      if (parseInt(this.paises[i].formation_year) < parseInt(paisviejo.formation_year)) {
        paisviejo = this.paises[i];
      }
    }
    return paisviejo.id;
  }

  
  onSelected(pais: PaisDetail): void {
    this.selected = true;
    this.selectedPais = pais;
  }


}
