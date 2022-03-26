import { jedinicaMere } from "./jedinicaMere.model";
import { tipProizvoda } from "./tipProizvoda.model";

export class Proizvod {

    constructor(
        public proizvodId:number,
        public nazivProizvoda: string,
        public datumProizvodnje: Date,
        public cena: number,
        public trenutnoStanjeZaliha:number,
    
        public jedinicaMereId:jedinicaMere,
    
        public tipProizvodaId:tipProizvoda
        ){
  
    }
  }