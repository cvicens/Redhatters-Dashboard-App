import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule }   from '@angular/router';

import { AppComponent } from './app.component';
import { CreateOrderComponent } from './create-order/create-order.component';

import { FHService } from './service/fh.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateOrderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'orders',
        component: CreateOrderComponent
      }
    ])
  ],
  providers: [FHService],
  bootstrap: [AppComponent]
})
export class AppModule { }
