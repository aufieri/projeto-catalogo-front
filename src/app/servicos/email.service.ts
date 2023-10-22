import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs"
import { Email } from "../modelo/Email";



export class EmailService{

        url:string = 'http://localhost:59449';
        constructor(private http:HttpClient){}

        //Metodo de selecionar Email com 'get' //
        selecionar ():Observable<Email>{
            return this.http.get<Email>(this.url);
        }

        //Metodo para cadastrar o Email com com 'post' //
        cadastrar(obj:Email):Observable<Email>{
            return this.http.post<Email>(this.url,obj);
        }

        //Metodo para editar as info do Email com 'put' //
        editar(obj:Email):Observable<Email>{
            return this.http.put<Email>(this.url,obj);
        }

        // Metodo de deletar Email com 'delete' //
        deletar(codigo:number):Observable<void>{
            return this.http.delete<void>(this.url + '/' + codigo);
        }
}