import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Zoom } from '@ionic-native/zoom/ngx';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private rutas: Router, private zoomService: Zoom) { }

  ngOnInit() {
  }

  navigateToUnirseLlamada() {
    this.rutas.navigate(['/logeado'])
  }

  logout() {
    this.zoomService.logout()
      .then((success: boolean) => {
        console.log(success);
        this.rutas.navigate(['/home'])
      })
      .catch((error: any) => console.log(error));
  }

  CreateMetting() {

    let options = {
      "no_driving_mode":true,
      "no_invite":true,
      "no_meeting_end_message":true,
      "no_titlebar":false,
      "no_bottom_toolbar":false,
      "no_dial_in_via_phone":true,
      "no_dial_out_to_phone":true,
      "no_disconnect_audio":true,
      "no_share":true,
      "no_audio":true,
      "no_video":true,
      "no_meeting_error_message":true
    };

    this.zoomService.startInstantMeeting(options)
      .then((success: any) => console.log(success))
      .catch((error: any) => console.log(error));
  }



}
