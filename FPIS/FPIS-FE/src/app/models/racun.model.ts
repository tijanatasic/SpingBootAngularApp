import { Kupac } from "./kupac.model";
import { nacinPlacanja } from "./nacinPlacanja.model";
import { otpremnica } from "./otpremnica.model";
import { radnik } from "./radnik.model";
import { realizacijaPlacanja } from "./realizacijaPlacanja.model";
import { stavkaRacuna } from "./stavkaRacuna.model";

export class racun {

    constructor(
        public racunKupcaId:number,
        public rokPlacanjaKupca:Date,
        public napomenaRacunaKupca:string,
        public kupacId:Kupac,
        public radnikId:radnik,
        public otpremnicaZaKupcaId:otpremnica,
        public listaPlacanja:realizacijaPlacanja[],
        public listaStavki:stavkaRacuna[]
        )
        {}
 }