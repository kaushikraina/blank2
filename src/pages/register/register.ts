import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
  providers: [AngularFireAuth]
})
export class RegisterPage {

@ViewChild("Rusername") user;
@ViewChild("Rpassword") pass;

  constructor(private fire:AngularFireAuth,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  register(){
    this.fire.auth.createUserWithEmailAndPassword(this.user.value,this.pass.value)
    .then(data =>{
      console.log('got data',data);
    } )
    .catch(error =>{
      console.log('got an error',error);
    });
    // console.log('ionViewDidLoad RegisterPage');
  }

}
