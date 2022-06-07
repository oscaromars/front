import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AlldataService } from './alldata.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DclientesComponent } from './dclientes/dclientes.component';
import { DcitasComponent } from './dcitas/dcitas.component';
import { DatencionesComponent } from './datenciones/datenciones.component';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { AddClienteComponent } from './dclientes/add-cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    DclientesComponent,
    DcitasComponent,
    DatencionesComponent,
    AddClienteComponent
  ],
  imports: [
    BrowserModule,
      HttpClientModule,
    AppRoutingModule,
      FormsModule
  ],
  providers: [AlldataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
