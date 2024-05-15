import { Component, Input, OnInit } from '@angular/core';
import { PaisDetail } from '../../paises-detail';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  paisID!: string;
  @Input() paisDetail!: PaisDetail;
  
  constructor() { }

  ngOnInit() {
  }

}
