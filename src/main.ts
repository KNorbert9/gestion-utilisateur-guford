/// <reference types="@angular/localize" />

import { bootstrapApplication } from '@angular/platform-browser';

import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import {environment} from "./environments/environment";
import {makeServer} from "./mocks/mirage.server";

if (!environment.production) {
  makeServer();
}

bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));

