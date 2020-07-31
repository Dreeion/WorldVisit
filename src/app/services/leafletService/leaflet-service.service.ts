import { Injectable } from '@angular/core';
import { FirebaseService } from '../firebaseService/firebase-service.service'
import * as L from 'leaflet';
import 'leaflet.markercluster';

@Injectable({
  providedIn: 'root'
})
export class LeafletService {
  
  map: any;
  g_marker : any;
  
  constructor(
    private firebaseService: FirebaseService
  ) { 
    this.initGMarker()
  }

  initGMarker(){
    this.g_marker = L.markerClusterGroup({
      
      spiderfyOnMaxZoom: false,
      showCoverageOnHover: false,
      zoomToBoundsOnClick: true,
      
      iconCreateFunction: function(cluster) {
        return L.divIcon(
          { 
            html: '<img class="duck" style="transform: translate(-45%, -75%);width: 80px;" src="assets/icons/marker_littlecoincoin.png" > <p style="position: absolute;top: -58%;left: 2%;color: black;font-size: 16px;font-weight: bold;font-family: serif;" >' + cluster.getChildCount() + '</p>',
            //html : cluster.getChildCount(),
            className: 'mycluster', 
            iconSize: null 
          });
      }
    });
  }
  generateMap(){
    this.map = L.map('map', {
      minZoom: 3,
      maxZoom: 17
    }).setView([28.644800, 77.216721], 10);
      
    L.tileLayer('http://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}', {
      attribution: 'edupala.com © ionic LeafLet',
    }).addTo(this.map);

    this.getMarkersFromFirebase();
  }

generateMarker(lat, long, image="", text="") {
    this.g_marker.addLayer(L.marker([lat, long], {icon: this.generateIconMarker(image)}).bindPopup('<img style="height: 300px;" src="' + image + '" alt="marker"/>', {
      minWidth: 200,
      maxWidth: 600
    }));
    // .bindPopup('Ionic 4 <br> Leaflet.')
    // mark.openPopup();
    // mark.valueOf()._icon.style.borderRadius = "25px"
    // mark.valueOf()._icon.style.border = "2px solid #2980B9"
    // mark.valueOf()._icon.style.objectFit = "cover"
}

  generateIconMarker(url){
    var markerIcon = new L.icon({
      iconUrl: url,
      //shadowUrl: url,
      className : "leafMarker",
      iconSize:     [50, 50], // size of the icon
      //shadowSize:   [0, 0], // size of the shadow
      //iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
      //shadowAnchor: [4, 62],  // the same for the shadow
      //popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
    });
    return markerIcon
  }

  getMarkersFromFirebase() {
    this.firebaseService.getDataFromFirebase("Markers").then(val => {
        val.forEach( (element, index, array) => {
            this.firebaseService.afSG.ref(element.image).getDownloadURL().subscribe(imgUrl => {
                this.generateMarker(element.lat, element.long, imgUrl)
            });
            if(index == array.length-1){
                this.map.addLayer(this.g_marker)
            }
        });
    });
  }

}
