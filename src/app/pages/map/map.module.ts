import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MapPageRoutingModule } from './map-routing.module';

import { MapPage } from './map.page';

import { TestComponentModule } from '../../components/footer/footer.component.module';

import { DynamicMapComponent } from '../../components/dynamic-map/dynamic-map.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MapPageRoutingModule,
    TestComponentModule,
    TranslateModule
  ],
  declarations: [MapPage, DynamicMapComponent],
  exports : [DynamicMapComponent]
})
export class MapPageModule {}
