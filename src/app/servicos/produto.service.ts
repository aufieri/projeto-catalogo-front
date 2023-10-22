import { HttpClient } from "@angular/common/http";
import {Observable} from  'rxjs'
import { Produto } from "../modelo/Produto";

export class ProdutoService{

    private url:string = 'http://localhost:59449'
    constructor(private http:HttpClient){}
        
    //Metodo de selecionar Produto com 'get' //
    selecionar():Observable<Produto>{
        return this.http.get<Produto>(this.url);
    }

    //Metodo para cadastrar o Produto com com 'post' //
    cadastrar(obj:Produto):Observable<Produto>{
        return this.http.post<Produto>(this.url,obj);
    }

    //Metodo para editar as info do Produto com 'put' //
    editar(obj:Produto):Observable<Produto>{
        return this.http.put<Produto>(this.url,obj);
    }

    // Metodo de deletar Produto com 'delete' //
    deletar(codigo:number):Observable<void>{
        return this.http.delete<void>(this.url + '/' + codigo);
    }

}
