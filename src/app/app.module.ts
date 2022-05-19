import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserAquisitionComponent } from './user-aquisition/user-aquisition.component';
import { EngagementComponent } from './engagement/engagement.component';
import { RetentionComponent } from './retention/retention.component';
import { MonetizationComponent } from './monetization/monetization.component';
import { HighchartsChartModule } from 'highcharts-angular';

@NgModule({
  declarations: [
    AppComponent,
    UserAquisitionComponent,
    EngagementComponent,
    RetentionComponent,
    MonetizationComponent,
    HighchartsChartModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
