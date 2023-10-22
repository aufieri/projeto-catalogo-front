import { ProdutoPed } from "./ProdutoPed";

export class Pedido{

    id: number = 0;
    usuarioId: number = 0;
    produtoPed:ProdutoPed = new ProdutoPed();
    valorTot: number = 0;
    statusPed:number = 0;
    dataPed:Date = new Date();
    dataConc: Date = new Date();

}