import { Component, OnInit } from "@angular/core";
import { HorasModule } from "../../modelos/horas/horas.module";
import { ReporteService } from "../../servicios/reporte.service";

@Component({
  selector: "app-reporte",
  templateUrl: "./reporte.component.html",
  styleUrls: ["./reporte.component.css"]
})
export class ReporteComponent implements OnInit {
  public report: HorasModule;

  constructor(private reporteSevice: ReporteService) {
    this.report = new HorasModule("", "", "", "", "", "", "", "", "", "");
  }

  ngOnInit(): void {}

  onSubmit(Form) {
    this.reporteSevice.ingresar(this.report).subscribe(
      Response => {
        this.report = Response;
        console.log(this.report);
      },
      Error => {
        console.log(Error);
      }
    );
  }
}
