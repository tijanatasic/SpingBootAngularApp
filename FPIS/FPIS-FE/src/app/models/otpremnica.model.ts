import { Kupac } from "./kupac.model";
import { radnik } from "./radnik.model";

export class otpremnica {

    constructor(
        public otpremnicaZaKupcaId:number,
        public otpremnicuPrimio:string,
        public datumDopremanja:Date,
        public radnikIdDoprema:radnik,
        public radnikIdIzdao:radnik,
        public kupacId:Kupac
        ){
  
    }
  }