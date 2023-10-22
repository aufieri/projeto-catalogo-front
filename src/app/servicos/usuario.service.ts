import { Observable } from "rxjs";
import { Usuario } from "../modelo/Usuario";

export class UsuarioService{

    private url:string = 'http://localhost:4200';
    constructor(private http:HttpClient){}

    selecionar():Observable<Usuario>{

    }

}