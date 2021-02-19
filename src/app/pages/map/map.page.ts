import { Component, OnInit } from '@angular/core';
import { LeafletService} from '../../services/leafletService/leaflet-service.service';
import { FirebaseService } from '../../services/firebaseService/firebase-service.service';
import { HttpClient } from '@angular/common/http';
import {forEach} from '@angular-devkit/schematics';
import {element} from 'protractor';
import {json} from '@angular-devkit/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.page.html',
  styleUrls: ['./map.page.scss'],
})



export class MapPage {
  listPays = []
  constructor(
    private http: HttpClient,
    private leafLetService: LeafletService,
    private firebaseService: FirebaseService,
    ) {
      this.getPaysData();
   }
   


   getPaysData() {
    this.http.get('https://restcountries.eu/rest/v2/all').subscribe((data ) => {
    this.listPays = Object.entries(data)
    });
   }

   sendItem(item){
    /*let dataToSend = []
    dataToSend.push(item.name) 
    dataToSend.push(item.capital)
    dataToSend.push(item.region)
    dataToSend.push(item.alpha2code)
    this.firebaseService.addData("Pays",dataToSend).then( res => this.pays = res);*/
    console.log(item)
   }


}

