import { Component, OnInit } from '@angular/core';
import { HorasModule } from '../../modelos/horas/horas.module';
import { from } from 'rxjs';
@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {
  public report : HorasModule;

  constructor() { 
    this.report = new HorasModule('','','','','','','','','','');
  }

  ngOnInit(): void {
  }

  onSubmit(Form){
    console.log(this.report);
  }

}
