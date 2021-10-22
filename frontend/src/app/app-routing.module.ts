import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { HomeComponent } from './components/home/home.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { RegistroRestauranteComponent } from './components/registro-restaurante/registro-restaurante.component';
import { RegistroClienteComponent } from './components/registro-cliente/registro-cliente.component';
import { CardComponent } from './components/card/card.component';
import { FormCreateMenuComponent } from './components/form-create-menu/form-create-menu.component';
import { FormCreateRestauranteComponent } from './components/form-create-restaurante/form-create-restaurante.component';
import { MenuDescriptionComponent } from './components/menu-description/menu-description.component';
import { ProgramadoresComponent } from './components/programadores/programadores.component';
import { HomeResComponent } from './components/home-res/home-res.component';
import { WhatsappComponent } from './components/whatsapp/whatsapp.component';
import { CartComponent } from './components/cart/cart.component';
import { CardMenuComponent } from './components/card-menu/card-menu.component';
import { MenuCortinaComponent } from './components/menu-cortina/menu-cortina.component';





const routes: Routes = [
  {path: "", redirectTo: "/home", pathMatch: "full"},
  { path: "navbar", component:NavbarComponent },
  { path: "footer", component:FooterComponent },
  { path: "carrusel", component:CarruselComponent },
  { path: "home", component:HomeComponent },
  { path: "signin", component:SigninComponent },
  { path: "signup", component:SignupComponent },
  { path: "registro-restaurante", component:RegistroRestauranteComponent},
  { path: "registro-cliente", component:RegistroClienteComponent},
  { path: "card", component:CardComponent },
  {path: 'crear-menu/:id',component:FormCreateMenuComponent},
  {path: 'crear-restaurante/',component:FormCreateRestauranteComponent},
  {path: 'crear-restaurante/:id',component:FormCreateRestauranteComponent},
  {path: 'restaurante/:id/menus',component:HomeComponent},
  {path: 'menu-description/:id',component:MenuDescriptionComponent},
  {path: 'programadores', component: ProgramadoresComponent},
  {path: 'home-res', component: HomeResComponent},
    {path: "whatsapp", component:WhatsappComponent},
  {path: "cart", component:CartComponent},
  {path: "card-menu", component:CardMenuComponent},
  {path: "menu-cortina/:id", component:MenuCortinaComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
