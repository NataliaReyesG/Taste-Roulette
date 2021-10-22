import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';
import { HomeComponent } from './components/home/home.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { RegistroRestauranteComponent} from './components/registro-restaurante/registro-restaurante.component';
import { RegistroClienteComponent } from './components/registro-cliente/registro-cliente.component';
import { FormCreateMenuComponent } from './components/form-create-menu/form-create-menu.component';
import { FormCreateRestauranteComponent } from './components/form-create-restaurante/form-create-restaurante.component';
import { CardRestauranteComponent } from './components/card-restaurante/card-restaurante.component';
import { MenuDescriptionComponent } from './components/menu-description/menu-description.component';
import { CardComponent } from './components/card/card.component';
import { ProgramadoresComponent } from './components/programadores/programadores.component';
import { HomeResComponent } from './components/home-res/home-res.component';
import { WhatsappComponent } from './components/whatsapp/whatsapp.component';
import { CardClienteComponent } from './components/card-cliente/card-cliente.component';
import { CartComponent } from './components/cart/cart.component';
import { CardMenuComponent } from './components/card-menu/card-menu.component';
import { MenuCortinaComponent } from './components/menu-cortina/menu-cortina.component';




@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CarruselComponent,
    HomeComponent,
    NosotrosComponent,
    SigninComponent,
    SignupComponent,
    RegistroRestauranteComponent,
    RegistroClienteComponent,
    FormCreateMenuComponent,
    FormCreateRestauranteComponent,
    CardRestauranteComponent,
    MenuDescriptionComponent,
    ProgramadoresComponent,
    HomeResComponent,
    CardComponent,
    WhatsappComponent,
    CardClienteComponent,
    CartComponent,
    CardMenuComponent,
    MenuCortinaComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AlifeFileToBase64Module


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
