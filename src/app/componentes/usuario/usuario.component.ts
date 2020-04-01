import { Component, OnInit } from '@angular/core';
import { User } from '../../modelos/horas/user.module';
import { UsuarioService } from '../../servicios/usuario.service';
@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  public cliente: User[];
  currentPage = 1;
  itemsPerPage = 3;
  pageSize: number;   
  longitud : number;

  constructor(private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.obtener();
  }

  public onPageChange(pageNum: number): void {
    this.pageSize = this.itemsPerPage*(pageNum - 1);
  }
  
  public changePagesize(num: number): void {
    this.itemsPerPage = this.pageSize + num;
  }

  obtener(){    
     this.usuarioService.obtener().subscribe(
        Response=>{
          this.cliente = Response;
          this.longitud = this.cliente.length;
          console.log(this.cliente);
          this.usuarioService.ingresar(this.cliente).subscribe(
            Response=>{              
              console.log("ok",Response);
            },
            Error=>{
              console.log("error");
            }
          );
        },
        Error=>{
          console.log("error");
        }
      );
       
  }

}
