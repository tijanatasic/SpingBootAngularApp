import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth-guard/auth.guard';
import { LoginComponent } from './login/login.component';
import { PotvrdaIzmenaComponent } from './potvrda-izmena/potvrda-izmena.component';
import { RacunIzmenaComponent } from './racun-izmena/racun-izmena.component';
import { RacunComponent } from './racun/racun.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ZahtevComponent } from './zahtev/zahtev.component';

const routes: Routes = [
  {
    path: 'kvalitet-kreiraj', 
    component: ZahtevComponent,
    canActivate : [AuthGuard]
  },
  {
    path: 'racun-kreiraj', 
    component: RacunComponent,
    canActivate : [AuthGuard]
  },
  {path: 'welcome', 
  component : WelcomeComponent,
  canActivate : [AuthGuard]
  },
  {path: '', component : LoginComponent},
  {
    path: 'kvalitet-azuriraj', 
    component : PotvrdaIzmenaComponent,
    canActivate : [AuthGuard]},
  {
    path: 'racun-azuriraj', 
    component : RacunIzmenaComponent,
    canActivate : [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ZahtevComponent, RacunComponent, WelcomeComponent, LoginComponent, PotvrdaIzmenaComponent, RacunIzmenaComponent]