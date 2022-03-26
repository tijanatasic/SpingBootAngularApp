import { Kupac } from "./kupac.model";
import { nacinPlacanja } from "./nacinPlacanja.model";
import { racun } from "./racun.model";

export class realizacijaPlacanja {

    constructor(
        public racunKupcaId: racun,
        public nacinPlacanjaId:nacinPlacanja
        )
        {}
  }