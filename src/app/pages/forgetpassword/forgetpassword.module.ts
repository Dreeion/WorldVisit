import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ForgetpasswordPageRoutingModule } from './forgetpassword-routing.module';

import { ForgetpasswordPage } from './forgetpassword.page';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ForgetpasswordPageRoutingModule,
    TranslateModule
  ],
  declarations: [ForgetpasswordPage]
})
export class ForgetpasswordPageModule {}
