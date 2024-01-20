import { HttpClient } from "@angular/common/http";
import {Observable} from 'rxjs';
import { Pedido } from "../modelo/Pedido";

export class PedidoService{

url:string = 'http://localhost:4200';
constructor(private http:HttpClient){}

//Metodo de selecionar Pedido com 'get' //
selecionar():Observable<Pedido>{
    return this.http.get<Pedido>(this.url);
}

//Metodo para cadastrar o Pedido com com 'post' //
cadastrar(obj:Pedido):Observable<Pedido>{
    return this.http.post<Pedido>(this.url,obj);
}

//Metodo para editar as info do Pedido com 'put' //
editar(obj:Pedido):Observable<Pedido>{
    return this.http.put<Pedido>(this.url,obj);
}

// Metodo de deletar Pedido com 'delete' //
deletar(codigo:number):Observable<void>{
    return this.http.delete<void>(this.url + '/' + codigo);
}

}