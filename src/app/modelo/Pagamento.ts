import { Usuario } from "./Usuario";
import { DatePipe } from '@angular/common';

export class Pagamento {

    constructor (private datePipe: DatePipe){

    }
   
    id: number = 0;
    usuario: Usuario = new Usuario;
    vlPgto: number = 0;
    dtPgto: Date = new Date();

    formatarDataHora(): string {
        return this.datePipe.transform(this.dtPgto, 'yyyy-MM-dd HH:mm');
      }
    // pagamentoFin: Date = new Date();
    dmTipoPgto: number = 0;
}