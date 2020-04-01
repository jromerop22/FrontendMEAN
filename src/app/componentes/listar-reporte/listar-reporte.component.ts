import { Component, OnInit } from '@angular/core';
import { ReporteService } from '../../servicios/reporte.service'
import { HorasModule } from '../../modelos/horas/horas.module';
@Component({
  selector: 'app-listar-reporte',
  templateUrl: './listar-reporte.component.html',
  styleUrls: ['./listar-reporte.component.css']
})
export class ListarReporteComponent implements OnInit {
  public temp : HorasModule;

  constructor(private reporteService: ReporteService) { }

  ngOnInit(): void {
    this.reporteService.obtener().subscribe(
      Response=>{
        this.temp = Response.data;
        console.log(this.temp);
      }
    );
  }
}
