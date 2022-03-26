import { formatDate } from "@angular/common";
import {
  Component,
  Inject,
  Input,
  LOCALE_ID,
  OnInit,
  Output,
} from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { ModalDismissReasons, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { nacinPlacanja } from "../models/nacinPlacanja.model";
import { otpremnica } from "../models/otpremnica.model";
import { Proizvod } from "../models/proizvod.model";
import { racun } from "../models/racun.model";
import { racunRequest } from "../models/racunRequest.model";
import { radnik } from "../models/radnik.model";
import { realizacijaPlacanja } from "../models/realizacijaPlacanja.model";
import { realizacijaPlacanjaReq } from "../models/realizacijaPlacanjaReq.model";
import { stavkaId } from "../models/stavkaId.model";
import { stavkaRacuna } from "../models/stavkaRacuna.model";
import { stavkaRacunaReqest } from "../models/stavkaRacunaReques.model";
import { RacunServiceService } from "../services/racun-service.service";

@Component({
  selector: "app-racun",
  templateUrl: "./racun.component.html",
  styleUrls: ["./racun.component.css"],
})
export class RacunComponent implements OnInit {
  closeResult = "";
  maxId = -1;
  radnici: radnik[] = [];
  naciniPlacanjaCB: nacinPlacanja[] = [];
  nacinPlacanja1 = -1;

  naciniPlacanjaIzabrani: nacinPlacanja[] = [];
  izabranNacin = <nacinPlacanja>{};
  izabranRadnik = <radnik>{};

  proizvodi: Proizvod[] = [];
  otpremnice: otpremnica[] = [];
  izabranaOtpremnica = <otpremnica>{};
  stavkeRacuna: stavkaRacuna[] = [];
  izabranaStavka = <stavkaRacuna>{};

  otpremnicaId = -1;
  datumOtpremnice = "";
  activeOtpremnicaId = -1;
  isIzabranaOtpremnica = false;

  activeProizvodId = -1;
  izabranProizvod = <Proizvod>{};
  nazivProizvoda = "";
  proizvodId = -1;
  isProizvodIzabran = false;
  startStavkaId = 1;
  rabatPopust = 0;
  cenaSaPopustom = 0;
  kolicinaProizvoda = 0;

  activeStavkaId = -1;
  ukupnaCena = 0;

  proizvId = "";
  nazivProizv = "";
  jedinicaMere = "";
  cenaProiz = "";

  racun = <racun>{};
  datumRacuna = '';
  realizacijePlacanja: realizacijaPlacanja[] = [];
  otpremnicaError='';
  proizvodiError='';

  proizvodiMessage = false;
  otpremnicaMessage = false;

  constructor(
    private modalService: NgbModal,
    @Inject(LOCALE_ID) private locale: string,
    private alertController: AlertController,
    private service: RacunServiceService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.service.getMaxId().subscribe((res) => {
      this.maxId = res;
    });

    this.service.getNaciniPlacanja().subscribe((res) => {
      this.naciniPlacanjaCB = res;
      this.nacinPlacanja1 = res[0].nacinPlacanjaId;
    });

    this.service.getRadnici().subscribe((res) => {
      this.radnici = res;
    });
  }

  open(content: any) {
    this.otpremnice = [];
    this.activeOtpremnicaId = -1;
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        (result) => {
          if (result == "Save click") {
            if (this.izabranaOtpremnica.otpremnicaZaKupcaId !== undefined) {
              this.isIzabranaOtpremnica = true;
            }
          }
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  open2(content: any) {
    this.proizvodi = [];
    this.activeProizvodId = -1;
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        (result) => {
          if (result == "Save click") {
            if (this.izabranProizvod.proizvodId !== undefined) {
              this.isProizvodIzabran = true;
              this.proizvId = this.izabranProizvod.proizvodId + "";
              this.nazivProizv = this.izabranProizvod.nazivProizvoda + "";
              this.jedinicaMere =
                this.izabranProizvod.jedinicaMereId.nazivJediniceMere + "";
              this.cenaProiz = this.izabranProizvod.cena + "";
            }
          }
          this.closeResult = `Closed with: ${result}`;
        },
        (reason) => {
          this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
        }
      );
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return "by pressing ESC";
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return "by clicking on a backdrop";
    } else {
      return `with: ${reason}`;
    }
  }

  onChange(event: any) {
    let value = (<HTMLSelectElement>document.getElementById("placanjeCB"))
      .value;
    this.izabranNacin = this.naciniPlacanjaCB.find(
      (x) => x.nacinPlacanjaId + "" == value
    ) as nacinPlacanja;
  }

  dodajNacinPlacanja() {
    let postoji = null;
    postoji = this.naciniPlacanjaIzabrani.filter(
      (x) => x.nacinPlacanjaId == this.izabranNacin.nacinPlacanjaId
    );
    if (postoji.length == 0 && this.izabranNacin.nacinPlacanjaId != undefined) {
      this.naciniPlacanjaIzabrani.push(this.izabranNacin);
    }
  }

  onChangeRadnik(event: any) {
    let value = (<HTMLSelectElement>document.getElementById("radnikCB")).value;
    this.izabranRadnik = this.radnici.find(
      (x) => x.radnikId + "" == value
    ) as radnik;
  }

  getOtpremnice(find: NgForm) {
    if (find.value.otpremnicaId == "" || find.value.otpremnicaId == null) {
      this.otpremnicaId = -1;
    } else {
      this.otpremnicaId = find.value.otpremnicaId;
    }
    this.otpremnice = [];
    try{
      this.service
      .getOtpremnice(this.otpremnicaId, this.datumOtpremnice)
      .subscribe((res) => {
        this.otpremnice = res;
        this.otpremnicaError='';
        if(res.length == 0){
          this.otpremnicaMessage = true;
        }else{
          this.otpremnicaMessage = false;
        }
      });
    }catch(e){
      this.otpremnicaMessage = false;
      this.otpremnicaError = (e as Error).message;
    }
    this.otpremnicaId = -1;
    this.datumOtpremnice = "";
    find.reset();
    console.log(this.otpremnice);
  }

  onSelectOtpremnica(evt: any) {
    this.datumOtpremnice = formatDate(
      new Date(evt.year, evt.month - 1, evt.day),
      "dd-MM-yyyy",
      this.locale
    );
  }

  onSelectRacun(evt: any) {
    this.datumRacuna = formatDate(
      new Date(evt.year, evt.month - 1, evt.day),
      "dd-MM-yyyy",
      this.locale
    );
    console.log(this.datumRacuna);
  }

  setOtpremnicaAsActive(otp: otpremnica) {
    this.izabranaOtpremnica = otp;
    this.activeOtpremnicaId = otp.otpremnicaZaKupcaId;
  }

  setProizvodAsActive(p: Proizvod) {
    this.izabranProizvod = p;
    this.activeProizvodId = p.proizvodId;
  }

  getProizvodi(find: NgForm) {
    this.proizvodi = [];
    if (find.value.prizvodId == "" || find.value.prizvodId == null) {
      this.proizvodId = -1;
    } else {
      this.proizvodId = find.value.prizvodId;
    }
    if (find.value.nazivProizvoda == "" || find.value.nazivProizvoda == null) {
      this.nazivProizvoda = "";
    } else {
      this.nazivProizvoda = find.value.nazivProizvoda;
    }
    try{
      this.service
      .getProizvodi(this.proizvodId, this.nazivProizvoda)
      .subscribe((res) => {
        this.proizvodi = res;
        if(res.length == 0){
          this.proizvodiMessage = true;
        }else{
          this.proizvodiMessage = false;
        }
      });
      this.proizvodiError = '';
    }catch(e){
      this.proizvodiMessage = false;
      this.proizvodiError = (e as Error).message;
    }

    this.proizvodId = -1;
    this.nazivProizvoda = "";
    find.reset();
  }

  async dodajStavku() {
    let kolicina = Number(
      (<HTMLSelectElement>document.getElementById("proizNarucenaKol")).value
    );
    if(kolicina > this.izabranProizvod.trenutnoStanjeZaliha){
      return this.presentAlertKolicinaProizvoda();
    }
    this.kolicinaProizvoda = kolicina;
    let rabat = Number(
      (<HTMLSelectElement>document.getElementById("rabat")).value
    );
    this.rabatPopust = rabat;
    let cenaSaPopustom = this.getCenaSaPopustom();

    if (this.stavkeRacuna.length == 0) {
      this.stavkeRacuna.push(
        new stavkaRacuna(
          1, 
          null!,
          kolicina,
          cenaSaPopustom,
          rabat,
          this.izabranProizvod
        )
      );
    } else {
      let postojiStavka = this.stavkeRacuna.filter(
        (x) => (x.stavkaRacunaId == this.izabranaStavka.stavkaRacunaId || x.proizvodId.proizvodId == this.izabranProizvod.proizvodId)
      );
      if (postojiStavka.length == 0) {
        this.stavkeRacuna.push(
          new stavkaRacuna(
            this.stavkeRacuna[this.stavkeRacuna.length-1].stavkaRacunaId+1, 
            null!,
            kolicina,
            cenaSaPopustom,
            rabat,
            this.izabranProizvod
          )
        );
      } else {
        let kolicina = Number(
          (<HTMLSelectElement>document.getElementById("proizNarucenaKol")).value
        );
        this.kolicinaProizvoda = kolicina;
        let rabat = Number(
          (<HTMLSelectElement>document.getElementById("rabat")).value
        );
        this.rabatPopust = rabat;
        postojiStavka[0].rabat = rabat;
        postojiStavka[0].kolicinaRobeZaPlacanje = kolicina;
        postojiStavka[0].cenaSaPopustom = this.getCenaSaPopustom();
      }
    }

    this.rabatPopust = 0;
    this.kolicinaProizvoda = 0;
    (<HTMLSelectElement>document.getElementById("proizNarucenaKol")).value =
      0 + "";
    (<HTMLSelectElement>document.getElementById("rabat")).value = 0 + "";
    this.cenaSaPopustom = 0;
    this.activeStavkaId = -1;
    this.izabranaStavka = <stavkaRacuna>{};
    this.ukupnaCena = 0;
    this.proizvId = "";
    this.nazivProizv = "";
    this.jedinicaMere = "";
    this.cenaProiz = "";
    this.izabranProizvod = <Proizvod>{};
  }

  getCenaSaPopustom(): number {
    let kolicina = Number(
      (<HTMLSelectElement>document.getElementById("proizNarucenaKol")).value
    );
    this.kolicinaProizvoda = kolicina;
    let rabat = Number(
      (<HTMLSelectElement>document.getElementById("rabat")).value
    );
    this.rabatPopust = rabat;
    this.cenaSaPopustom =
      kolicina *
      (this.izabranProizvod.cena -
        (this.izabranProizvod.cena * this.rabatPopust) / 100);
    return this.cenaSaPopustom;
  }

  setStavkaAsActive(s: stavkaRacuna) {
    this.izabranaStavka = s;
    this.izabranProizvod = s.proizvodId;
    this.activeStavkaId = s.stavkaRacunaId;
    this.cenaSaPopustom = s.cenaSaPopustom;
  }

  obrisiStavku() {
    this.stavkeRacuna.forEach((element, index) => {
      if (element.stavkaRacunaId == this.izabranaStavka.stavkaRacunaId)
        this.stavkeRacuna.splice(index, 1);
    });
    this.izabranaStavka = <stavkaRacuna>{};
    this.ukupnaCena = 0;
    this.proizvId = "";
    this.nazivProizv = "";
    this.jedinicaMere = "";
    this.cenaProiz = "";
    var stavkaRacId = 1;
    this.stavkeRacuna.forEach((element, index) => {
      element.stavkaRacunaId = stavkaRacId++;
    });
  }

  izmeniStavku() {
    (<HTMLSelectElement>document.getElementById("proizNarucenaKol")).value =
      this.izabranaStavka.kolicinaRobeZaPlacanje + "";
    (<HTMLSelectElement>document.getElementById("rabat")).value =
      this.izabranaStavka.rabat + "";
    this.proizvId = this.izabranProizvod.proizvodId + "";
    this.nazivProizv = this.izabranProizvod.nazivProizvoda + "";
    this.jedinicaMere =
      this.izabranProizvod.jedinicaMereId.nazivJediniceMere + "";
    this.cenaProiz = this.izabranProizvod.cena + "";
  }

  getUkupnaCena() {
    this.stavkeRacuna.forEach((element) => {
      this.ukupnaCena = this.ukupnaCena + element.cenaSaPopustom;
      console.log(this.ukupnaCena);
    });
  }

  async presentAlert(){
    const alert = await this.alertController.create({
      message: 'Uspesno ste kreirali racun kupca',
      buttons: [
        {
          text: 'Okay',
          handler: () => {
            this.router.navigate(['welcome']);
          }
        }
      ]
    });
    await alert.present();
  }

  async presentAlertNaciniPlacanja(){
    const alert = await this.alertController.create({
      message: 'Unesite nacin placanja racuna!',
      buttons: [
        {
          text: 'Okay',
          handler: () => {
          }
        }
      ]
    });
    await alert.present();
  }

  async presentAlertKolicinaProizvoda(){
    const alert = await this.alertController.create({
      message: 'Ne postoji dovoljan broj proizvda na zalihama!',
      buttons: [
        {
          text: 'Okay',
          handler: () => {
          }
        }
      ]
    });
    await alert.present();
  }

  async presentAlertOtpremnica(){
    const alert = await this.alertController.create({
      message: 'Unesite otpremnicu!',
      buttons: [
        {
          text: 'Okay',
          handler: () => {
          }
        }
      ]
    });
    await alert.present();
  }

  async presentAlertStavke(){
    const alert = await this.alertController.create({
      message: 'Unesite stavke racuna!',
      buttons: [
        {
          text: 'Okay',
          handler: () => {
          }
        }
      ]
    });
    await alert.present();
  }

  async presentAlertRadnik(){
    const alert = await this.alertController.create({
      message: 'Izaberite radnika koji kreira racun!',
      buttons: [
        {
          text: 'Okay',
          handler: () => {
          }
        }
      ]
    });
    await alert.present();
  }

  async saveRacun(save: NgForm){

    if(this.naciniPlacanjaIzabrani.length == 0){
      return this.presentAlertNaciniPlacanja();
    }

    if(this.izabranaOtpremnica.otpremnicaZaKupcaId == undefined){
      return this.presentAlertOtpremnica();
    }

    if(this.stavkeRacuna.length == 0){
      return this.presentAlertStavke();
    }

    if(this.izabranRadnik.radnikId == undefined){
      return this.presentAlertRadnik();
    }

    this.naciniPlacanjaIzabrani.forEach((element) => {
      this.realizacijePlacanja.push(
        new realizacijaPlacanja(null!,element)
      )
    });
    this.racun.racunKupcaId = this.maxId;
    this.racun.napomenaRacunaKupca = save.value.napomena;
    this.racun.kupacId = this.izabranaOtpremnica.kupacId;
    this.racun.radnikId = this.izabranRadnik;
    this.racun.otpremnicaZaKupcaId = this.izabranaOtpremnica;
    this.racun.listaPlacanja = [];
    this.racun.listaStavki = [];
    var stavkeReq : stavkaRacunaReqest [] = [];
    var realizacijePlac: realizacijaPlacanjaReq [] = [];

    this.stavkeRacuna.forEach((element) =>{
      element.racunKupcaId = null!;
      this.racun.listaStavki.push(element);
      stavkeReq.push(
        new stavkaRacunaReqest(
          new stavkaId(element.stavkaRacunaId,null!),
          element.kolicinaRobeZaPlacanje,
          element.cenaSaPopustom,
          element.rabat,
          element.proizvodId
        )
      )
    });

    this.realizacijePlacanja.forEach((element)=>{
      this.racun.listaPlacanja.push(element);
      realizacijePlac.push(
        new realizacijaPlacanjaReq(
        new realizacijaPlacanja(element.racunKupcaId,element.nacinPlacanjaId))
      );
    });

    var racunReq = new racunRequest(
      this.racun.racunKupcaId,
      this.racun.napomenaRacunaKupca,
      this.racun.kupacId,
      this.racun.radnikId,
      this.racun.otpremnicaZaKupcaId,
      realizacijePlac,
      stavkeReq
    );

    this.service.saveRacun(racunReq, this.datumRacuna).subscribe((res) => {
    });
    this.presentAlert();
  }

  closeError(){
    this.proizvodiError='';
    this.otpremnicaError='';
  }

  removeNacinPlacanja(id:number){
    this.naciniPlacanjaIzabrani.forEach((element, index) => {
      if (element.nacinPlacanjaId == id)
        this.naciniPlacanjaIzabrani.splice(index, 1);
    });
  }

}
