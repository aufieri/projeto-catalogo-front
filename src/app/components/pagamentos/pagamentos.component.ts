import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Pagamento } from 'src/app/modelo/Pagamento';
import { PagamentoFiltro } from 'src/app/modelo/PagamentoFiltro';
import { PagamentoService } from 'src/app/servicos/pagamento.service';

@Component({
  selector: 'app-pagamentos',
  templateUrl: './pagamentos.component.html',
  styleUrls: ['./pagamentos.component.css']
})
export class PagamentosComponent implements OnInit {
  ELEMENT_DATA: Pagamento[] = []

  filtro:PagamentoFiltro = new PagamentoFiltro();

  displayedColumns: string[] = ['id', 'nome', 'data', 'valor', 'tipo'];
  dataSource = new MatTableDataSource<Pagamento>(this.ELEMENT_DATA);
  
  @ViewChild(MatPaginator) paginator: MatPaginator;
  
  constructor(
    private service: PagamentoService
  ) {}

  ngOnInit(): void {
      this.findAll();
      // this.dataSource = null;
  }

  findAll() {
    this.service.selecionar().subscribe( resposta => {
      this.ELEMENT_DATA = resposta
      this.dataSource = new MatTableDataSource<Pagamento>(resposta)
      this.dataSource.paginator = this.paginator;
    })
  }

  findByFilter() {
    this.service.selecionarPorFiltro(this.filtro).subscribe( resposta => {
      this.ELEMENT_DATA = resposta
      this.dataSource = new MatTableDataSource<Pagamento>(resposta)
      this.dataSource.paginator = this.paginator;
    })
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();
  // }

  teste(){
    
  }
}
