import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActualizarEmpresaComponent } from './pages/crud/actualizar-empresa/actualizar-empresa.component';
import { RegistrarEmpresaComponent } from './pages/crud/registrar-empresa/registrar-empresa.component';
import { CrudComponent } from './pages/crud/crud.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    ActualizarEmpresaComponent,
    RegistrarEmpresaComponent,
    CrudComponent,
    FooterComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
