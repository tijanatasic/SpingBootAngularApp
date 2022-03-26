import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { map, catchError } from "rxjs/operators";
import { Zahtev } from "../models/zahtev.model";
import { PotvrdaOKvalitetu } from "../models/potvrdaOKvalitetu.model";
import { LoginService } from "./login.service";

@Injectable({
  providedIn: "root",
})
export class ZahtevServiceService {
  urlZahtev = "http://localhost:8080/kvalitet/zahtevi";
  urlPotvrde = "http://localhost:8080/kvalitet/potvrde";

  maxId = 0;

  headers = new HttpHeaders({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://localhost:4200",
    "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
    "Access-Control-Allow-Headers": "Origin, Content-Type, X-Auth-Token",
    'Authorization': 'Basic ' + btoa(this.authenticationService.returnUser().username + ":" + this.authenticationService.returnUser().password)
  });
  options = { headers: this.headers };

  constructor(private http: HttpClient, private authenticationService: LoginService) {}

  getMaxId() {
    console.log(this.headers)
    return this.http.get<number>("http://localhost:8080/kvalitet/maxId",this.options).pipe(
      map((res) => {
        return res;
      })
    );
  }

  getZahtevi(sifraZahteva: number, format: string) {
    if (sifraZahteva == -1 && format == "") {
      throw new Error(
        "Morate uneti barem jedan od dva parametara za pretrazivanje!"
      );
    }
    if (sifraZahteva == -1) {
      this.urlZahtev = this.urlZahtev + "?datumFormiranja=" + format;
    } else if (format == "") {
      this.urlZahtev = this.urlZahtev + "?sifraZahteva=" + sifraZahteva;
    } else {
      this.urlZahtev =
        this.urlZahtev +
        "?sifraZahteva=" +
        sifraZahteva +
        "&datumFormiranja=" +
        format;
    }

    return this.http.get<{ [key: number]: Zahtev }>(this.urlZahtev,this.options).pipe(
      map((res) => {
        this.urlZahtev = "http://localhost:8080/kvalitet/zahtevi";
        const zahtevi: Zahtev[] = [];
        for (const key in res) {
          if (res.hasOwnProperty(key)) {
            zahtevi.push(
              new Zahtev(
                res[key].id,
                res[key].proizvodId,
                res[key].datum,
                res[key].napomena,
                res[key].kupacId,
                res[key].veterinarId
              )
            );
          }
        }
        return zahtevi;
      })
    );
  }

  savePotvrda(
    id: number,
    zahtev: Zahtev,
    mestoIzdavanja: string,
    vrstaRobe: string,
    datum: string,
    opis: string
  ) {
    return this.http
      .post<any>(
        "http://localhost:8080/kvalitet/unosPotvrde",
        {
          potvrdaOKvalitetuId: id,
          opisPotvrde: opis,
          datumPotvrde: datum,
          mestoIzdavanja: mestoIzdavanja,
          vrstaRobe: vrstaRobe,
          veterinarId: zahtev.veterinarId,
          kupacId: zahtev.kupacId,
          proizvodId: zahtev.proizvodId,
          zahtevZaProveromKvalitetaId: zahtev,
        },
        this.options
      )
      .pipe(
        map((res) => {
          console.log(res);
        })
      );
  }

  findPotvrda(idPotvrde: number, datum: string) {
    if (idPotvrde == -1 && datum == "") {
      throw new Error(
        "Morate uneti barem jedan od dva parametara za pretrazivanje!"
      );
    }
    if (idPotvrde == -1) {
      this.urlPotvrde = this.urlPotvrde + "?datumFormiranja=" + datum;
    } else if (datum == "") {
      this.urlPotvrde = this.urlPotvrde + "?sifraPotvrde=" + idPotvrde;
    } else {
      this.urlPotvrde =
        this.urlPotvrde +
        "?sifraPotvrde=" +
        idPotvrde +
        "&datumFormiranja=" +
        datum;
    }

    return this.http
      .get<{ [key: number]: PotvrdaOKvalitetu }>(this.urlPotvrde,this.options)
      .pipe(
        map((res) => {
          this.urlPotvrde = "http://localhost:8080/kvalitet/potvrde";
          const potvrde: PotvrdaOKvalitetu[] = [];
          for (const key in res) {
            if (res.hasOwnProperty(key)) {
              potvrde.push(
                new PotvrdaOKvalitetu(
                  res[key].potvrdaOKvalitetuId,
                  res[key].opisPotvrde,
                  res[key].datumPotvrde,
                  res[key].vrstaRobe,
                  res[key].mestoIzdavanja,
                  res[key].veterinarId,
                  res[key].kupacId,
                  res[key].proizvodId,
                  res[key].zahtevZaProveromKvalitetaId
                )
              );
            }
          }
          return potvrde;
        })
      );
  }

  updatePotvrda(potvrda: PotvrdaOKvalitetu, datum: string) {
    return this.http
      .put<any>(
        "http://localhost:8080/kvalitet/izmenaPotvrde",
        {
          potvrdaOKvalitetuId: potvrda.potvrdaOKvalitetuId,
          opisPotvrde: potvrda.opisPotvrde,
          datumPotvrde: datum,
          mestoIzdavanja: potvrda.mestoIzdavanja,
          vrstaRobe: potvrda.vrstaRobe,
          veterinarId: potvrda.zahtevZaProveromKvalitetaId.veterinarId,
          kupacId: potvrda.zahtevZaProveromKvalitetaId.kupacId,
          proizvodId: potvrda.zahtevZaProveromKvalitetaId.proizvodId,
          zahtevZaProveromKvalitetaId: potvrda.zahtevZaProveromKvalitetaId,
        },
        this.options
      )
      .pipe(
        map((res) => {
          console.log(res);
        })
      );
  }

  deletePotvrda(id: number) {
    return this.http
      .delete<any>(
        "http://localhost:8080/kvalitet/obrisiPotvrdu/" + id,
        this.options
      )
      .pipe(
        map((res) => {
          console.log(res);
        })
      );
  }
}
