import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ObterDeputadosComponent } from "./obter-deputados/obter-deputados.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, ObterDeputadosComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
