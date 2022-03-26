import { odeljenje } from "./odeljenje.model";

export class radnoMesto {

    constructor(
        public radnoMestoId:number,
        public nazivRadnogMesta:string,
        public opisRadnogMesta:string,
        public odeljenjeId:odeljenje
        )
        {}
  }