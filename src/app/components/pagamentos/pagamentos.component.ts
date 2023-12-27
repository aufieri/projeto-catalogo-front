import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/modelo/Usuario';
import { UsuarioService } from 'src/app/servicos/usuario.service';

@Component({
  selector: 'app-pagamentos',
  templateUrl: './pagamentos.component.html',
  styleUrls: ['./pagamentos.component.css']
})
export class PagamentosComponent implements OnInit {
  ELEMENT_DATA: Usuario[] = []

  displayedColumns: string[] = ['id', 'nome', 'email', 'acoes'];
  dataSource = new MatTableDataSource<Usuario>(this.ELEMENT_DATA);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(
    private service: UsuarioService
  ) {}

  ngOnInit(): void {
      this.findAll();
  }

  findAll() {
    this.service.selecionar().subscribe( resposta => {
      this.ELEMENT_DATA = resposta
      this.dataSource = new MatTableDataSource<Usuario>(resposta)
      this.dataSource.paginator = this.paginator;
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
