import { radnoMesto } from "./radnoMesto.model";

export class radnik {

    constructor(
        public radnikId:number,
        public brojRadneKnjizice:number,
        public jmbg:number,
        public imePrezime:string,
        public radnoMestoId:radnoMesto
        )
        {}
  }