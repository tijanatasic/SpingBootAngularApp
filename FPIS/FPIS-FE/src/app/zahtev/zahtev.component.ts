import { Component, Inject, Input, LOCALE_ID, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ZahtevServiceService } from '../services/zahtev-service.service';
import { Zahtev } from '../models/zahtev.model';
import {formatDate} from '@angular/common';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-zahtev',
  templateUrl: './zahtev.component.html',
  styleUrls: ['./zahtev.component.css']
})
export class ZahtevComponent implements OnInit {

  @Input() public zahtevi: Zahtev[] = [];

  zahtev = <Zahtev>{};

  activeZahtev = <Zahtev>{};

  closeResult = '';

  isVisible = false;

  isIzaberi = false;

  activeId = -1;

  datumFormiranja: Date = new Date();  
  datum: Date = new Date();  
  formatDatum = '';
  sifraZahteva = -1;

  format = '';

  zahtevError='';
  zahteviMessage = false;


  constructor(private service: ZahtevServiceService, private modalService: NgbModal,@Inject(LOCALE_ID) private locale: string,
  private alertController: AlertController, private router: Router) { }

  maxId = 0;

  ngOnInit(): void {
    this.getMaxId();
  }

  getMaxId(){
    this.service.getMaxId().subscribe((res=>{
      this.maxId=res;
    }));
  }

  open(content: any) {
    this.activeZahtev = <Zahtev>{};
    this.zahtev = <Zahtev>{};
    this.isIzaberi = false;
    this.isVisible = false;
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      if(result == 'Save click'){
        if(this.activeZahtev.id !== undefined){
          this.zahtev = this.activeZahtev;
          this.isIzaberi = true;
          this.activeId = -1;
          console.log(this.zahtev);
        }
      }
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }

  onSelect(evt:any){
    this.datumFormiranja = new Date(evt.year,evt.month-1,evt.day);
    this.format = formatDate(new Date(evt.year,evt.month-1,evt.day),'dd-MM-yyyy',this.locale);
  }

  getDatum(evt:any){
    this.datum = new Date(evt.year,evt.month-1,evt.day);
    this.formatDatum = formatDate(new Date(evt.year,evt.month-1,evt.day),'dd-MM-yyyy',this.locale);
    console.log(this.formatDatum);
  }

  public getZahtevi(find:NgForm){
    this.activeId = -1;
    this.isVisible = false;
    if(find.value.sifraZahteva == '' || find.value.sifraZahteva ==null){
      this.sifraZahteva = -1;
    }else{
      this.sifraZahteva = find.value.sifraZahteva;
    }

    try{
      this.service.getZahtevi(this.sifraZahteva, this.format).subscribe((res=>{
        this.zahtevi=res;
        if(res.length>0){
          this.zahteviMessage = false;
          this.isVisible = true;
        }else{
          this.zahteviMessage = true;
        }
      }));
      this.zahtevError = '';
    }catch(e){
      this.zahteviMessage = false;
      this.zahtevError = (e as Error).message;
    }
    this.sifraZahteva = -1;
    this.format = '';
    find.reset();
    
  }

  public setStateAsActive(zahtev:Zahtev){

    this.activeZahtev = zahtev;
    this.activeId = zahtev.id;

  }

  async savePotvrda(save:NgForm){

    if(this.zahtev.id == undefined){
      return this.presentAlertZahtev();
    }

    this.service.savePotvrda(this.maxId,this.zahtev,save.value.mestoIzdavanja, save.value.vrstaRobe, this.formatDatum, save.value.opis).subscribe((res=>{
      console.log(res);
    }));
    this.presentAlert();
  }

  async presentAlert(){
    const alert = await this.alertController.create({
      message: 'Uspesno ste uneli novu potvrdu o kvalitetu',
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

  async presentAlertZahtev(){
    const alert = await this.alertController.create({
      message: 'Izaberite zahtev za potvrdu kvaliteta!',
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

  closeError(){
    this.zahtevError='';
  }

}
