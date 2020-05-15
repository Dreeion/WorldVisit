import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { ToastController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { LanguageServiceService } from '../../services/languageService/language-service.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {
  languages = [];
  selected = '';

  constructor(
    public afAuth: AngularFireAuth,
    public toastController: ToastController,
    private navCtrl: NavController,
    private languageService: LanguageServiceService
  ) {}

  dataUser = {
        email: '',
        password: '',
        newPassword: '',
        oldPassword: '',
        pseudo: '',
        uid: ''
      };

  ngOnInit() {
      this.languages = this.languageService.getLanguages();
      this.selected = this.languageService.selected;
  }

  select(lng) {
      this.languageService.setLanguage(lng);
  }

  deleteUser() {
    var user = firebase.auth().currentUser;

    user.delete().then(() => {
      this.navCtrl.navigateRoot('pages/login');
    }).catch(function(error) {
      // An error happened.
    });
  }

  resetPassword() {
    var user = firebase.auth().currentUser;
    var newPassword = this.dataUser.newPassword;
    var oldPassword = this.dataUser.oldPassword;
    /*var password = this.dataUser.password;*/

    //if (oldPassword === password) {*/
    user.updatePassword(newPassword).then(function() {
        // Update successful.
        console.log('passwordReset');
      }).catch(function(error) {
        // An error happened.
    });
 // }
 //   else{console.log('mdp diff�rent');}
  }

resetPseudo() {
  this.afAuth.authState.subscribe(auth => {
          var postData = {
    pseudo: this.dataUser.pseudo,
  };
          var newPostKey = firebase.database().ref().child('Users').push().key;
          var updates = {};
          updates['/Users/' + auth.uid ] = postData;

          return firebase.database().ref().update(updates);
})

}

  // Write the new post's data simultaneously in the posts list and the user's post list.
  
}
