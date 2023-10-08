import { Comptebancaire } from "./comptebancaire";
import { Obligation } from "./obligation";

export class Comptetitre {
    idCT:any;
    libelle:any;
    fraiscourtage:any;
    fraistenu:any;
    fraisOPCVM:any;
    solde:any;
    comptebancairet:Comptebancaire;
    obligations:Obligation[];
}
