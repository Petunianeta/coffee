import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 quantity=0;
 display : string = "none";
 wCream:boolean;
 cream: string;
 chocolate:boolean;
 choc : string;
 fwhite: boolean;
 white: string;
 Name;
 whipped;
 number;
 price:number;
 
  constructor(public navCtrl: NavController) {
    this.price = 10;
  }
  adjust (){
 this.quantity-=1;
 console.log(this.quantity);
  }
  onClickA(){
    this.quantity+=1;
    console.log(this.quantity);
  }
  onReset (){
    this.quantity=0;
  }

  order(){
    if(this.Name == null){
      alert('Please fill the field name');
    }else{
      this.price = this.price * this.quantity;
    this.display = "block";
    if(this.whipped){
      this.cream = "Whipped cream";
      this.price += 5;
    } 
    if(this.chocolate){
      this.choc = "+Chocolate"
      this.price += 6;
    }
    if(this.fwhite){
      this.white = "flat white"
      this.price += 8;
    }
    }
    
  }
}
