import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReporteComponent } from './componentes/reporte/reporte.component';
import { UsuarioComponent } from './componentes/usuario/usuario.component';
import { ListarReporteComponent } from './componentes/listar-reporte/listar-reporte.component';

const routes: Routes = [  
  { path:'user', component: UsuarioComponent},
  { path:'reporte', component: ReporteComponent},
  { path:'listar', component: ListarReporteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
