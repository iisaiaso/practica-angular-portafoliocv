import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PresentacionComponent } from './presentacion/presentacion.component';
import { SobreMiComponent } from './sobre-mi/sobre-mi.component';
import { ExperienciaComponent } from './experiencia/experiencia.component';
import { ContactoComponent } from './contacto/contacto.component';
import { SkillComponent } from './skill/skill.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PresentacionComponent,
    SobreMiComponent,
    ExperienciaComponent,
    ContactoComponent,
    SkillComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent,
    PresentacionComponent,
    SobreMiComponent,
    ExperienciaComponent,
    ContactoComponent,
    SkillComponent
  ]
})
export class ComponentesModule { }
