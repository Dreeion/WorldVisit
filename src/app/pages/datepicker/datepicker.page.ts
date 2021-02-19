import { Component, OnInit } from '@angular/core';
import { DatePicker } from '@ionic-native/date-picker/ngx';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.page.html',
  styleUrls: ['./datepicker.page.scss'],
})
export class DatepickerPage implements OnInit {

  constructor(
    private datePicker: DatePicker
  ) {

    /*this.datePicker.show({
      date: new Date(),
      mode: 'date',
      androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_DARK
    }).then(
      date => console.log('Got date: ', date),
      err => console.log('Error occurred while getting date: ', err)
    );
*/
  }

  ngOnInit() {
  }



}
