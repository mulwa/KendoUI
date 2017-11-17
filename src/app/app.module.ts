import { MainRouteModule } from './modules/main-route/main-route.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// Import the Animations module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// Import the ButtonsModule
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import {InputsModule} from '@progress/kendo-angular-inputs';
import {DropDownsModule} from '@progress/kendo-angular-dropdowns';



import { AppComponent } from './app.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { FooterComponent } from './components/footer/footer.component';
import { GridComponent } from './components/grid/grid.component';
import { ChartComponent } from './components/chart/chart.component';
 import { ChartsModule } from '@progress/kendo-angular-charts';
import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    RegistrationComponent,
    FooterComponent,
    GridComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonsModule,
    InputsModule,
    ChartsModule,
    DropDownsModule,
    MainRouteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
