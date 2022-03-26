import { Proizvod } from "./proizvod.model";
import { racun } from "./racun.model";
import { stavkaId } from "./stavkaId.model";

export class stavkaRacunaReqest {

    constructor(
        public stavkaId: stavkaId,
        public kolicinaRobeZaPlacanje:number,
        public cenaSaPopustom:number,
        public rabat:number,
        public proizvodId:Proizvod
        )
        {}
  }
