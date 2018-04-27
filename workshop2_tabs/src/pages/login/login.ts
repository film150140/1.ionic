import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder ,Validators  } from '@angular/forms';
import { Users } from '../../models/users';
import { TabsPage } from '../tabs/tabs';
//import { Validators } from '@angular/forms/src/validators';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  login_form : any;
  register_form : any;
  login_type = "login";
  password_max_length = 6;
  phone_max = 10;
  users = {} as Users;


  constructor(public navCtrl: NavController, public navParams: NavParams ,private formBuilder : FormBuilder) {
    this.login_form =this.formBuilder.group({email: ['',[Validators.email,Validators.required]],
                                              password: ['',[Validators.minLength(this.password_max_length),Validators.required]],});
     
    this.register_form =this.formBuilder.group({email: ['',[Validators.email,Validators.required]],
                                              password: ['',[Validators.minLength(this.password_max_length),Validators.required]],
                                              tel: ['',[Validators.minLength(this.phone_max),Validators.required]]});
                                              
  }

  login(users:Users){
    console.log(users.email);
    this.navCtrl.push(TabsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
