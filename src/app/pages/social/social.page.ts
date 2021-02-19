import { Component } from '@angular/core';
import {FirebaseService} from "../../services/firebaseService/firebase-service.service";
import {UserService} from "../../services/userService/user-service.service";

@Component({
  selector: 'app-social',
  templateUrl: './social.page.html',
  styleUrls: ['./social.page.scss'],
})
export class SocialPage {

  pays = [];

  constructor(
      private firebase: FirebaseService,
      private user: UserService
  ) {
    this.getPays()
    
  }



  getPays() {
     this.firebase.getDataFromFirebase("Pays").then( res => this.pays = res);
  }

  deletePays(pays) {
    this.firebase.deleteAtPath("Pays/"+pays+'/');
    
 }


  takePicture() {
    console.log('clickButton');
  }

}
