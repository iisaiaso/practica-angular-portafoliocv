import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent {
  @Input() descripcion!:string[]
  @Input() boton!: string
  @Output() cambioBoton = new EventEmitter<string>()
  @Output() cambioDesc = new EventEmitter<string[]>()

  menos() {
    this.descripcion = []
    this.boton = ""
    this.cambioBoton.emit(this.boton)
    this.cambioDesc.emit(this.descripcion)
  }

}
