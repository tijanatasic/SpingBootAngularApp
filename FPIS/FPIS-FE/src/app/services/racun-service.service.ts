import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs/operators";
import { nacinPlacanja } from "../models/nacinPlacanja.model";
import { otpremnica } from "../models/otpremnica.model";
import { Proizvod } from "../models/proizvod.model";
import { racun } from "../models/racun.model";
import { radnik } from "../models/radnik.model";
import { racunRequest } from "../models/racunRequest.model";
import { LoginService } from "./login.service";

@Injectable({
  providedIn: "root",
})
export class RacunServiceService {
  urlGetOtpremnice = "http://localhost:8080/racun/getOtpremnice";
  urlGetProizvodi = "http://localhost:8080/racun/getProizvodi";
  urlGetRacuni = "http://localhost:8080/racun/racuni";


  headers = new HttpHeaders({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:4200",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
    'Authorization': 'Basic ' + btoa(this.authenticationService.returnUser().username + ":" + this.authenticationService.returnUser().password)
  });
  options = { headers: this.headers };
  require: any;

  constructor(private http: HttpClient, private authenticationService: LoginService) {}

  getMaxId() {
    console.log(this.options);
    return this.http.get<number>("http://localhost:8080/racun/getMaxId",this.options).pipe(
      map((res) => {
        return res;
      })
    );
  }

  getRadnici() {
    return this.http.get<radnik[]>("http://localhost:8080/racun/radnici",this.options).pipe(
      map((res) => {
        return res;
      })
    );
  }

  getNaciniPlacanja() {
    return this.http
      .get<nacinPlacanja[]>("http://localhost:8080/racun/naciniPlacanja",this.options)
      .pipe(
        map((res) => {
          return res;
        })
      );
  }

  getOtpremnice(otpremnicaId: number, datum: string) {
    if (otpremnicaId == -1 && datum == "") {
      throw new Error(
        "Morate uneti barem jedan od dva parametara za pretrazivanje!"
      );
    }
    if (otpremnicaId == -1) {
      this.urlGetOtpremnice = this.urlGetOtpremnice + "?datum=" + datum;
    } else if (datum == "") {
      this.urlGetOtpremnice =
        this.urlGetOtpremnice + "?otpremnicaId=" + otpremnicaId;
    } else {
      this.urlGetOtpremnice =
        this.urlGetOtpremnice +
        "?otpremnicaId=" +
        otpremnicaId +
        "&datum=" +
        datum;
    }

    return this.http
      .get<{ [key: number]: otpremnica }>(this.urlGetOtpremnice,this.options)
      .pipe(
        map((res) => {
          this.urlGetOtpremnice = "http://localhost:8080/racun/getOtpremnice";
          const otpremnice: otpremnica[] = [];
          for (const key in res) {
            if (res.hasOwnProperty(key)) {
              otpremnice.push(
                new otpremnica(
                  res[key].otpremnicaZaKupcaId,
                  res[key].otpremnicuPrimio,
                  res[key].datumDopremanja,
                  res[key].radnikIdDoprema,
                  res[key].radnikIdIzdao,
                  res[key].kupacId
                )
              );
            }
          }
          return otpremnice;
        })
      );
  }

  getProizvodi(id: number, naziv: string) {
    if (id == -1 && naziv == "") {
      throw new Error(
        "Morate uneti barem jedan od dva parametara za pretrazivanje!"
      );
    }
    if (id == -1) {
      this.urlGetProizvodi = this.urlGetProizvodi + "?naziv=" + naziv;
    } else if (naziv == "") {
      this.urlGetProizvodi = this.urlGetProizvodi + "?proizvodId=" + id;
    } else {
      this.urlGetProizvodi =
        this.urlGetProizvodi + "?proizvodId=" + id + "&naziv=" + naziv;
    }

    return this.http
      .get<{ [key: number]: Proizvod }>(this.urlGetProizvodi,this.options)
      .pipe(
        map((res) => {
          this.urlGetProizvodi = "http://localhost:8080/racun/getProizvodi";
          const proizvodi: Proizvod[] = [];
          for (const key in res) {
            if (res.hasOwnProperty(key)) {
              proizvodi.push(
                new Proizvod(
                  res[key].proizvodId,
                  res[key].nazivProizvoda,
                  res[key].datumProizvodnje,
                  res[key].cena,
                  res[key].trenutnoStanjeZaliha,
                  res[key].jedinicaMereId,
                  res[key].tipProizvodaId
                )
              );
            }
          }
          return proizvodi;
        })
      );
  }

  saveRacun(racun: racunRequest, datum:string) {
    console.log(racun.listaPlacanja);
    return this.http
      .post<any>(
        "http://localhost:8080/racun/sacuvajRacun",
        {
          racun : racun.racunKupcaId,
          rokPlacanjaKupca: datum,
          napomenaRacunaKupca: racun.napomenaRacunaKupca,
          kupacId: racun.kupacId,
          radnikId: racun.radnikId,
          otpremnicaZaKupcaId: racun.otpremnicaZaKupcaId,
          listaPlacanja: racun.listaPlacanja,
          listaStavki: racun.listaStavki
        },
        this.options
      )
      .pipe(
        map((res) => {
          console.log(res);
        })
      );
  }

  findRacun(id: number, datum: string) {
    if (id == -1 && datum == "") {
      throw new Error(
        "Morate uneti barem jedan od dva parametara za pretrazivanje!"
      );
    }
    if (id == -1) {
      this.urlGetRacuni = this.urlGetRacuni + "?datum=" + datum;
    } else if (datum == "") {
      this.urlGetRacuni = this.urlGetRacuni + "?racunId=" + id;
    } else {
      this.urlGetRacuni =
        this.urlGetRacuni + "?racunId=" + id + "&datum=" + datum;
    }

    return this.http.get<{ [key: number]: racun }>(this.urlGetRacuni,this.options).pipe(
      map((res) => {
        this.urlGetRacuni = "http://localhost:8080/racun/racuni";
        const racuni: racun[] = [];
        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            racuni.push(
              new racun(
                res[key].racunKupcaId,
                res[key].rokPlacanjaKupca,
                res[key].napomenaRacunaKupca,
                res[key].kupacId,
                res[key].radnikId,
                res[key].otpremnicaZaKupcaId,
                res[key].listaPlacanja,
                res[key].listaStavki
              )
            );
          }
        }
        return racuni;
      })
    );
  }

  updateRacun(rac: racunRequest, datum: string) {
    return this.http
      .put<any>(
        "http://localhost:8080/racun/izmenaRacuna",
        {
          racun : rac.racunKupcaId,
          rokPlacanjaKupca: datum,
          napomenaRacunaKupca: rac.napomenaRacunaKupca,
          kupacId: rac.kupacId,
          radnikId: rac.radnikId,
          otpremnicaZaKupcaId: rac.otpremnicaZaKupcaId,
          listaPlacanja: rac.listaPlacanja,
          listaStavki: rac.listaStavki
        }
        ,
        this.options
      )
      .pipe(
        map((res) => {
          console.log(res);
        })
      );
  }

  deleteRacun(id:number){
    return this.http
      .delete<any>(
        "http://localhost:8080/racun/deleteRacun/" + id,
        this.options
      )
      .pipe(
        map((res) => {
          console.log(res);
        })
      );
  }
}
