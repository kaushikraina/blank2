import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { P1Page } from '../p1/p1';
import { LoginPage } from '../login/login';
import { RegisterPage } from '../register/register';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'

})


export class HomePage {
  films: Observable<any>;

    constructor(public navCtrl: NavController, public http: Http) {

   }

  onloginb(){
    this.navCtrl.push(LoginPage);
    // console.log("login");
  }

  onregisterb(){
    this.navCtrl.push(RegisterPage);
    /*this.navCtrl.push(P1Page);*/
    // console.log("register");
  }

  onpostb(){
        var link = 'http://nikola-breznjak.com/_testings/ionicPHP/api.php';
        var data = JSON.stringify({username: "kaushik"});

        this.http.post(link, data)
        .subscribe(data => {

            console.log(data._body);
        }, error => {
            console.log("Oooops!");
        });
  }






}
