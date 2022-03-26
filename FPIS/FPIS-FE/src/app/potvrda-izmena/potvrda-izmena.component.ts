import { formatDate } from "@angular/common";
import { Component, Inject, Input, LOCALE_ID, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { AlertController } from "@ionic/angular";
import { ModalDismissReasons, NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { PotvrdaOKvalitetu } from "../models/potvrdaOKvalitetu.model";
import { Zahtev } from "../models/zahtev.model";
import { ZahtevServiceService } from "../services/zahtev-service.service";

@Component({
  selector: "app-potvrda-izmena",
  templateUrl: "./potvrda-izmena.component.html",
  styleUrls: ["./potvrda-izmena.component.css"],
})
export class PotvrdaIzmenaComponent implements OnInit {
  @Input() public zahtevi: Zahtev[] = [];

  @Input() public potvrde: PotvrdaOKvalitetu[] = [];

  zahtev = <Zahtev>{};

  activeZahtev = <Zahtev>{};

  potvrda = <PotvrdaOKvalitetu>{};

  closeResult = "";

  isVisible = false;

  isIzaberi = false;

  activeId = -1;

  formatDatum = "";

  sifraZahteva = -1;

  format = "";
  formatDatumPotvrde = "";

  potvrdaId = -1;
  activePotvrda = <PotvrdaOKvalitetu>{};
  activePotvrdaId = -1;
  potvrdaTableVisible = false;
  datum2 = new Date();

  potvrdaError = "";
  zahtevError = "";
  zahteviMessage = false;
  potvrdaMessage = false;

  constructor(
    private service: ZahtevServiceService,
    private modalService: NgbModal,
    @Inject(LOCALE_ID) private locale: string,
    private alertController: AlertController,
    private router: Router
  ) {}

  ngOnInit() {}

  open(content: any) {
    this.modalService
      .open(content, { ariaLabelledBy: "modal-basic-title" })
      .result.then(
        (result) => {
          if (result == "Save click") {
            if (this.activeZahtev.id !== undefined) {
              this.zahtev = this.activeZahtev;
              this.isIzaberi = true;
              this.activeId = -1;
              console.log(this.zahtev);
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

  onSelect(evt: any) {
    this.format = formatDate(
      new Date(evt.year, evt.month - 1, evt.day),
      "dd-MM-yyyy",
      this.locale
    );
  }

  getDatum(evt: any) {
    this.formatDatum = formatDate(
      new Date(evt.year, evt.month - 1, evt.day),
      "dd-MM-yyyy",
      this.locale
    );
  }

  getDatumPotvrde(evt: any) {
    this.formatDatumPotvrde = formatDate(
      new Date(evt.year, evt.month - 1, evt.day),
      "dd-MM-yyyy",
      this.locale
    );
  }

  public getZahtevi(find: NgForm) {
    this.activeId = -1;
    this.zahtevError = "";
    this.isVisible = false;
    if (find.value.sifraZahteva == "" || find.value.sifraZahteva == null) {
      this.sifraZahteva = -1;
    } else {
      this.sifraZahteva = find.value.sifraZahteva;
    }

    try {
      this.service
        .getZahtevi(this.sifraZahteva, this.format)
        .subscribe((res) => {
          this.zahtevi = res;
          if (res.length > 0) {
            this.zahteviMessage = false;
            this.isVisible = true;
          }else{
            this.zahteviMessage = true;
          }
        });
    } catch (e) {
      this.isVisible = false;
      this.zahteviMessage = false;
      this.zahtevError = (e as Error).message;
    }

    this.sifraZahteva = -1;
    this.format = "";
    find.reset();
  }

  public setStateAsActive(zahtev: Zahtev) {
    this.activeZahtev = zahtev;
    this.activeId = zahtev.id;
  }

  public setStatePotvrdaAsActive(potv: PotvrdaOKvalitetu) {
    this.activePotvrda = potv;
    this.datum2 = potv.datumPotvrde;
    this.formatDatum = this.datum2 + "";
    this.activePotvrdaId = potv.potvrdaOKvalitetuId;
    this.activeZahtev = potv.zahtevZaProveromKvalitetaId;
    this.activeId = this.activeZahtev.id;
    this.zahtev = this.activeZahtev;
    this.zahtevi.push(potv.zahtevZaProveromKvalitetaId);
    this.isIzaberi = true;
  }

  async updatePotvrda(save: NgForm) {

    if(this.activePotvrda.potvrdaOKvalitetuId == undefined){
      return this.presentAlertPotvrda();
    }

    if(this.zahtev.id == undefined){
      return this.presentAlertZahtev();
    }

    this.potvrda.zahtevZaProveromKvalitetaId = this.zahtev;
    this.potvrda.mestoIzdavanja = save.value.mestoIzdavanja;
    this.potvrda.opisPotvrde = save.value.opis;
    this.potvrda.potvrdaOKvalitetuId = save.value.id;
    this.potvrda.vrstaRobe = save.value.vrstaRobe;
    this.service
      .updatePotvrda(this.potvrda, this.formatDatum)
      .subscribe((res) => {
        console.log(res);
      });
    this.presentAlert();
  }

  async presentAlertPotvrda() {
    const alert = await this.alertController.create({
      message: "Izaberite potvrdu koju zelite da azurirate!",
      buttons: [
        {
          text: "Okay",
          handler: () => {
          },
        },
      ],
    });
    await alert.present();
  }

  async presentAlertZahtev() {
    const alert = await this.alertController.create({
      message: "Izaberite zahtev za potvrdu kvaliteta!",
      buttons: [
        {
          text: "Okay",
          handler: () => {
          },
        },
      ],
    });
    await alert.present();
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      message: "Uspesno ste azurirali potvrdu o kvalitetu",
      buttons: [
        {
          text: "Okay",
          handler: () => {
            this.router.navigate(['welcome']);
          },
        },
      ],
    });
    await alert.present();
  }

  async deleteAlert() {
    const alert = await this.alertController.create({
      message: "Uspesno ste obrisali potvrdu o kvalitetu",
      buttons: [
        {
          text: "Okay",
          handler: () => {
            this.router.navigate(['welcome']);
          },
        },
      ],
    });
    await alert.present();
  }

  public findSelectedPotvrda(findPotvrda: NgForm) {
    this.activePotvrdaId = -1;
    this.activePotvrda = <PotvrdaOKvalitetu>{};
    this.potvrde = [];
    this.zahtev = <Zahtev>{};
    this.isIzaberi = false;
    this.potvrdaTableVisible = false;
    this.datum2 = null!;
    if (
      findPotvrda.value.potvrdaId == "" ||
      findPotvrda.value.potvrdaId == null
    ) {
      this.potvrdaId = -1;
    } else {
      this.potvrdaId = findPotvrda.value.potvrdaId;
    }
    try {
      this.service
        .findPotvrda(this.potvrdaId, this.formatDatumPotvrde)
        .subscribe((res) => {
          this.potvrde = res;
          if (res.length > 0) {
            this.potvrdaTableVisible = true;
            this.potvrdaMessage = false;
          }else{
            this.potvrdaMessage = true;
          }
        });
      this.potvrdaError = "";
    } catch (e) {
      this.potvrdaMessage = false;
      this.potvrdaError = (e as Error).message;
    }

    this.potvrdaId = -1;
    this.formatDatumPotvrde = "";
    findPotvrda.reset();
  }

  obrisiPotvrdu() {
    this.service
      .deletePotvrda(this.activePotvrda.potvrdaOKvalitetuId)
      .subscribe((res) => {});
    this.deleteAlert();
  }

  closeError() {
    this.potvrdaError = "";
    this.zahtevError = "";
  }
}
