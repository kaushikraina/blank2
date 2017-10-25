import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { P1Page } from '../pages/p1/p1';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';


import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { HttpModule } from '@angular/http';


const fireb = {
    apiKey: "AIzaSyAB1j2Z1nRY66-pJUdccFMaNt715X4WdL0",
    authDomain: "mypro-80768.firebaseapp.com",
    databaseURL: "https://mypro-80768.firebaseio.com",
    projectId: "mypro-80768",
    storageBucket: "mypro-80768.appspot.com",
    messagingSenderId: "699679872341"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    P1Page,
    LoginPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(fireb),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    P1Page,
    LoginPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AngularFireDatabase,
    HttpModule,
    AngularFireAuthModule,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
