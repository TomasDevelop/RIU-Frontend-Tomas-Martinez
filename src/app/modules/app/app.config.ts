import { ApplicationConfig, provideExperimentalZonelessChangeDetection, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding, withInMemoryScrolling } from '@angular/router';
import { routes } from '@app/modules/app/app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
// import { provideHttpClient, withFetch } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withComponentInputBinding(),
    ),
    provideExperimentalZonelessChangeDetection(),
    provideAnimationsAsync()
  ]
};
