import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

import { provideHttpClient } from '@angular/common/http';
import { addIcons } from 'ionicons';

import { playCircleOutline, pauseCircleOutline, stopCircleOutline } from 'ionicons/icons'



addIcons({
  'play-circle-outline': playCircleOutline,
  'pause-circle-outline': pauseCircleOutline,
  'stop-circle-outline': stopCircleOutline


});


bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(),
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});
