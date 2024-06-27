import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(), provideAnimationsAsync()]
};


/* 

https://fonts.google.com/icons?icon.set=Material+Icons&icon.style=Filled&icon.query=login&icon.size=24&icon.color=%23e8eaed
https://material.angular.io/components/icon/examples


*/