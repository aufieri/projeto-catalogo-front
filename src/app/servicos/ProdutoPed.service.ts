import { HttpClient } from "@angular/common/http";
import {Observable} from 'rxjs'
import { ProdutoPed } from "../modelo/ProdutoPed";

export class ProdutoPedService{
    url:string = 'http://localhost:59449'
    constructor(private http:HttpClient){}

    //Metodo de selecionar Produto Pedido com 'get' //
    selecionar():Observable<ProdutoPed>{
        return this.http.get<ProdutoPed>(this.url);
    }
    
    //Metodo para cadastrar o Produto Pedido com com 'post' //
    cadastrar(obj:ProdutoPed):Observable<ProdutoPed>{
        return this.http.post<ProdutoPed>(this.url,obj);
    }

    //Metodo para editar as info do Produto Pedido com 'put' //
    editar(obj:ProdutoPed):Observable<ProdutoPed>{
        return this.http.put<ProdutoPed>(this.url,obj);
    }

    // Metodo de deletar Produto Pedido com 'delete' //
    deletar(codigo:number):Observable<void>{
        return this.http.delete<void>(this.url + '/' + codigo);
    }
}