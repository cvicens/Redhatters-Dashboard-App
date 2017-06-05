import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { ChartsModule } from 'ng2-charts';

import { AppComponent } from './app.component';
import { CreateOrderComponent } from './create-order/create-order.component';

import { FHService } from './service/fh.service';
import { ChartComponent } from './components/chart/chart.component';
import { SearchCityComponent } from './components/search-city/search-city.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateOrderComponent,
    ChartComponent,
    SearchCityComponent
  ],
  imports: [
    NgbModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {
        path: 'orders',
        component: CreateOrderComponent
      }
    ]),
    ChartsModule
  ],
  providers: [FHService],
  bootstrap: [AppComponent]
})
export class AppModule { }
