import { Kupac } from "./kupac.model";
import { Proizvod } from "./proizvod.model";
import { Veterinar } from "./veterinar.model";

export class Zahtev {

    constructor(public id: number,
        public proizvodId: Proizvod,
        public datum: Date,
        public napomena: string,
        public kupacId: Kupac,
        public veterinarId: Veterinar){
  
    }
  }