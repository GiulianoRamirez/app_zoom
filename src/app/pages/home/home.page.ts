import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormBuilder } from '@angular/forms';

import { Zoom } from '@ionic-native/zoom/ngx';

import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {


  formLogin = {
    email: "",
    password: ""
  }

  constructor(private rutas: Router, private zoomService: Zoom, private formBuilder: FormBuilder, public navCtrl: NavController) {

  }

  ngOnInit() {
  }

  logForm() {
    console.log(this.formLogin)
    this.login(this.formLogin.email, this.formLogin.password)
  }


  login(correo, contrasena){
    this.zoomService.login(correo, contrasena)
    .then((success: any) => {
      console.log(success);
      this.rutas.navigate(['/logeado'])
    })
    .catch((error: any) => console.log(error));
  }




}
