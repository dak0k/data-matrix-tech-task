import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { routerReducer } from '@ngrx/router-store';
import { ordersEffects, ordersFeatureKey, ordersReducer } from '@frontend/orders-data-access';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideHttpClient} from '@angular/common/http';
import { API_URL } from '@frontend/http';
import { environment } from '../environments/environment.development';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(appRoutes),
    provideStore({
      router: routerReducer,
      [ordersFeatureKey]: ordersReducer,
    }),
    provideEffects(ordersEffects),
    provideHttpClient(),
    {
      provide: API_URL,
      useValue: environment.api_url,
    },
    provideAnimations(),
  ],
};
