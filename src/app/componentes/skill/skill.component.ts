import { Component } from '@angular/core';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent {
  descPadre!:string[]
  botonp!: string
  ready() {
    this.descPadre = ['Nivel Intermedio','Habilidades en maquetado','de paginas web con HTML5']
    this.botonp = "Ver menos"
  }
}
