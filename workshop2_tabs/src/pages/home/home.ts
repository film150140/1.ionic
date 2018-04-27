import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Beverage } from '../../models/beverage';
import { Subscription } from 'rxjs/Subscription';
import { BeverageServiceProvider } from '../../providers/beverage-service/beverage-service';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  beverageList: Beverage[];
  subscription: Subscription;

  constructor(public navCtrl: NavController,private beverageService: BeverageServiceProvider) {

  }
  goBack() {
    this.navCtrl.pop();
  }
private getData(){
  this.subscription = this.beverageService.getAllData().subscribe((beverageList:Beverage[])=> this.beverageList = beverageList);
}

ionViewWillEnter(){
  this.getData();
}

ionViewWillLeave(){
  this.subscription.unsubscribe();
}

}


