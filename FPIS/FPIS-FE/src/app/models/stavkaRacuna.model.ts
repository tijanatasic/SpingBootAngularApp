import { Proizvod } from "./proizvod.model";
import { racun } from "./racun.model";

export class stavkaRacuna {

    constructor(
        public stavkaRacunaId:number,
        public racunKupcaId:racun,
        public kolicinaRobeZaPlacanje:number,
        public cenaSaPopustom:number,
        public rabat:number,
        public proizvodId:Proizvod
        )
        {}
  }
