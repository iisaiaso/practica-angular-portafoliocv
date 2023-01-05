import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  title = "hola bebe"
  public formContacto!: FormGroup
  resultado!: string

  constructor(private formBuilder: FormBuilder) {

  }
  ngOnInit() {
    this.formContacto = this.formBuilder.group({
      nombre: ['', 
      [
        Validators.required,
        Validators.minLength(10)
      ]
    ],
      email: ['', 
      [
        Validators.required,
        Validators.email
      ]
    ],
      mensaje: ['', 
      [
        Validators.required
      ]
    ]
    })
  }
  sendContact(): any {
    if (this.formContacto.valid)
      this.resultado = "Tu mensaje fue enviado";
    else
      this.resultado = "Hay datos inválidos en el formulario";
  }
}
