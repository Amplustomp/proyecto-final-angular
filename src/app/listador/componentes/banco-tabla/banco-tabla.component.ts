import { Component, Input, OnInit } from '@angular/core';
import { IBanco } from '../banco.interface';

@Component({
  selector: 'app-banco-tabla',
  templateUrl: './banco-tabla.component.html',
  styleUrls: ['./banco-tabla.component.css']
})
export class BancoTablaComponent implements OnInit {

  constructor() { }
  // Ahora si necesitaremos el ngOnInit
  ngOnInit(): void {
  }

  @Input() bancos_entrada:IBanco[]=[]

}
