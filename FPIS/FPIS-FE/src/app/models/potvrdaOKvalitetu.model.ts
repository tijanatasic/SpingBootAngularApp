import { Kupac } from "./kupac.model";
import { Proizvod } from "./proizvod.model";
import { Veterinar } from "./veterinar.model";
import { Zahtev } from "./zahtev.model";

export class PotvrdaOKvalitetu {

    constructor(
        public potvrdaOKvalitetuId: number,
        public opisPotvrde: string,
        public datumPotvrde: Date,
        public vrstaRobe: string,
        public mestoIzdavanja: string,
        public veterinarId: Veterinar,
        public kupacId: Kupac,
        public proizvodId: Proizvod,
        public zahtevZaProveromKvalitetaId: Zahtev
        ){
  
    }
  }