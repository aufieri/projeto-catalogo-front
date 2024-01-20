import { Observable } from "rxjs";
import { Pagamento } from "../modelo/Pagamento";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { FiltroPagamentoDTO } from "../modelo/FiltroPagamentoDTO";

@Injectable({
    providedIn: 'root'
})

export class PedidoService{

    url: string = 'http://localhost:8080/pagamento';
    constructor(private http:HttpClient){}

    selecionar():Observable<Pagamento[]>{
        return this.http.get<Pagamento[]>(this.url + '/pagamento');
    } 

    selecionarPorFiltro(pagamentoFiltro:FiltroPagamentoDTO):Observable<Pagamento[]>{
        return this.http.put<Pagamento[]>(this.url + "findByFiltro", pagamentoFiltro);
    }

    cadastrar(obj:Pagamento):Observable<Pagamento>{
        return this.http.post<Pagamento>(this.url,obj);
    }

    editar(obj:Pagamento):Observable<Pagamento>{
        return this.http.put<Pagamento>(this.url,obj);
    }

    deletar(codigo:number):Observable<void>{
        return this.http.delete<void>(this.url + '/' + codigo);
    }


}