import { Component, OnInit } from '@angular/core';
import { Zoom } from '@ionic-native/zoom/ngx';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-logeado',
  templateUrl: './logeado.page.html',
  styleUrls: ['./logeado.page.scss'],
})
export class LogeadoPage implements OnInit {

  formMeeting = {
    nombre: "",
    meetingId: "",
    meetingPassword: ""
  }


  constructor(private rutas: Router, private zoomService: Zoom, private formBuilder: FormBuilder, public navCtrl: NavController) { }

  
  ngOnInit() {
  }


  formEnterMeeting() {
    console.log(this.formMeeting)
    this.joinZoomMeet(this.formMeeting.meetingId, this.formMeeting.meetingPassword , this.formMeeting.nombre)
  }


  logout(){
    this.zoomService.logout()
    .then((success: boolean) => {
      console.log(success);
      this.rutas.navigate(['/home'])
    })
    .catch((error: any) => console.log(error));
  }


  joinZoomMeet(meetingId, meetingPassword, nombre){

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

    this.zoomService.joinMeeting(meetingId, meetingPassword, nombre, options)
    .then((success: any) => console.log(success))
    .catch((error: any) => console.log(error));
  }

}
