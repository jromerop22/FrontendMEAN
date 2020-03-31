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
          console.log(this.cliente);
        },
        Error=>{
          console.log("error");
        }
      );
  }

}
