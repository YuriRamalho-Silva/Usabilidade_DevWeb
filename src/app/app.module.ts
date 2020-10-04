import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListaCursosComponent } from './lista-cursos/lista-cursos.component';
import { ListaDeProfessoesComponent } from './lista-de-professoes/lista-de-professoes.component';

@NgModule({
  declarations: [
    AppComponent,
    ListaCursosComponent,
    ListaDeProfessoesComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
