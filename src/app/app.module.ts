import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IndexComponent } from './pages/index/index.component';
import { AdminComponent } from './pages/admin/admin.component';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

const config: SocketIoConfig = { url: 'http://localhost:3100/bigscreen', options: {}};

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //SocketIoModule.forRoot(config),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
