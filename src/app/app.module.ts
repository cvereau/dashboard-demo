import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { environment } from '../environments/environment';
import { MockApiInterceptor } from './mocks/mock-api.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@NgModule({
  declarations: [AppComponent],
  imports: [CommonModule, BrowserModule, AppRoutingModule, SharedModule, RouterOutlet],
  bootstrap: [AppComponent],
  providers: [
    provideAnimationsAsync(),
    ...(!environment.production && environment.useMocks ? [{
      provide: HTTP_INTERCEPTORS,
      useClass: MockApiInterceptor,
      multi: true
    }] : [])
  ],
})
export class AppModule {}
