import { Kupac } from "./kupac.model";
import { otpremnica } from "./otpremnica.model";
import { radnik } from "./radnik.model";
import { realizacijaPlacanjaReq } from "./realizacijaPlacanjaReq.model";
import { stavkaRacunaReqest } from "./stavkaRacunaReques.model";

export class racunRequest {

    constructor(
        public racunKupcaId:number,
        public napomenaRacunaKupca:string,
        public kupacId:Kupac,
        public radnikId:radnik,
        public otpremnicaZaKupcaId:otpremnica,
        public listaPlacanja:realizacijaPlacanjaReq[],
        public listaStavki:stavkaRacunaReqest[]
        )
        {}
 }