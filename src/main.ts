import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { imageConfigDefault } from 'next/dist/shared/lib/image-config';


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
