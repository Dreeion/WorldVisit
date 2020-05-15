import {AngularFireDatabase} from '@angular/fire/database';
import { AngularFireStorage } from '@angular/fire/storage';
import {Injectable} from '@angular/core';
import { resolve } from 'url';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { LoadingController, AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(
      public afAuth: AngularFireAuth,
      public afDB: AngularFireDatabase,
      public afSG: AngularFireStorage,
      public loadingController: LoadingController,
      public alertController: AlertController,
  ) {
  }

  getImagesDatabase(getImages, folder, key) {
    this.afDB.list(folder + '/').snapshotChanges(['child_added']).subscribe(images => {
      images.forEach(image => {
        this.getImagesStorage(image, getImages, key);
      });
    });
  }

  getDataFromFirebase(folder): any {
    let array_r = [];
    return new Promise((resolve) => {
      this.afDB.list(folder + '/').snapshotChanges(['child_added']).subscribe(images => {
        images.forEach( (element, index, array) => {
          array_r.push(element.payload.exportVal());
          if (index == array.length - 1 ) {
            resolve(array_r);
          }
        });
      });
    });
  }

  getImagesStorage(image: any, images: any, key) {
    const imgRef = image.payload.exportVal().ref;
    this.afSG.ref(imgRef).getDownloadURL().subscribe(imgUrl => {
      if (key == null) {
        images.push({
          name: image.payload.exportVal().name,
          url: imgUrl
        });
      } else {
        if (key == image.payload.key) {
          images.push({
            name: image.payload.exportVal().name,
            url: imgUrl
          });
        }
      }
    });
  }

  async uploadImage( image: string) {
    const imagePath = new Date().getTime() + '.jpg'; // nom de l'image dans storage
    this.afAuth.authState.subscribe(auth => {
      const newPostKey = firebase.database().ref().child('Users').push().key; // création de la clé dans la database
      const updates = {};
      const postData = {
        url: imagePath
      }

      /*updates['/user-images/' + auth.uid + '/' + newPostKey ] = postData;
      updates['/Images/' + newPostKey ] = postData;*/
      const upload = this.afSG.ref(imagePath).putString(image, 'data_url'); // upload de l'image dans storage
      return firebase.database().ref().update(updates);
    });
  }

  getImagesUserDatabase(folder, uid, images) {
    firebase.database().ref(folder + '/' + uid).once('value')
        .then((snapshot) => {
          var image = Object.keys(snapshot.val());
          var key = '-' + Object.values(image)[0];
          this.getImagesDatabase(images, 'Images', key);
        });
  }

}
