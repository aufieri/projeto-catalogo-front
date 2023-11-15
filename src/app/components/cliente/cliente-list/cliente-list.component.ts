import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Usuario } from 'src/app/modelo/Usuario';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit{

  ELEMENT_DATA: Usuario[] = [
    {
      id: 0,
      tipoUsuario: 0,
      nome: 'Mitsu',
      email: 'mitsu.junior1215@outlook.com',
      senha: '12345'
    }
  ]

  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource<Usuario>(this.ELEMENT_DATA);
  
  constructor() {}

  ngOnInit(): void {
      
  }


  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}