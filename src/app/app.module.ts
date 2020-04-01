import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReporteComponent } from './componentes/reporte/reporte.component';

import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListarReporteComponent } from './componentes/listar-reporte/listar-reporte.component';

@NgModule({
  declarations: [
    AppComponent,
    ReporteComponent,
    UsuarioComponent,
    ListarReporteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
