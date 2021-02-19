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

  constructor(
    private http: HttpClient,
    private leafLetService: LeafletService,
    private firebaseService: FirebaseService,
    ) {
      this.getPaysData();
   }

    paysData = {
      name: '',
      capital: '',
      continent: '',
    };


   getPaysData() {
   this.http.get('https://restcountries.eu/rest/v2/all').subscribe((data ) => {
     for (const machin of Object.entries(data)) {
       for (const [key, value] of Object.entries(machin)) {
         this.paysData.name = value.name;
         this.paysData.capital = value.capital;
         this.paysData.continent = value.region;
       }
     }
    });
   }


}

