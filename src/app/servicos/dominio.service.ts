import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs"
import { Dominio } from "../modelo/Dominio";

export class DominioService{

        url:string = 'http://localhost:59449'
        constructor(private http:HttpClient){}

        //Metodo de selecionar Dominio com 'get' //
        selecionar():Observable<Dominio>{
            return this.http.get<Dominio>(this.url);
        }

        //Metodo para cadastrar o Dominio com com 'post' //
        cadastrar(obj:Dominio):Observable<Dominio>{
            return this.http.post<Dominio>(this.url,obj);
        }

        //Metodo para editar as info do Dominio com 'put' //
        editar(obj:Dominio):Observable<Dominio>{
            return this.http.put<Dominio>(this.url,obj);
        }

        // Metodo de deletar Dominio com 'delete' //
        deletar(codigo:number):Observable<void>{
            return this.http.delete<void>(this.url + '/' + codigo);
        }

}