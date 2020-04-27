import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormBuilder } from '@angular/forms';

import { Zoom } from '@ionic-native/zoom/ngx';

import { NavController } from '@ionic/angular';
import { Router } from '@angular/router';

import { ToastController } from '@ionic/angular';



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

  constructor(private rutas: Router, private zoomService: Zoom, private formBuilder: FormBuilder, public navCtrl: NavController, public toastController: ToastController) {

  }

  ngOnInit() {
  }


  async presentToastSesionIniciada() {
    const toast = await this.toastController.create({
      message: 'Sesion iniciada con exito!',
      duration: 2000
    });
    toast.present();
  }

  async presentToastErrorIniciarSesion() {
    const toast = await this.toastController.create({
      message: 'Error al iniciar sesion, intente denuevo.',
      duration: 2000
    });
    toast.present();
  }


  logForm() {
    console.log(this.formLogin)
    this.login(this.formLogin.email, this.formLogin.password)
  }


  login(correo, contrasena){
    this.zoomService.login(correo, contrasena)
    .then((success: any) => {
      console.log(success);
      this.presentToastSesionIniciada()
      this.rutas.navigate(['/menu'])
    })
    .catch((error: any) =>{
      this.presentToastErrorIniciarSesion()
        console.log(error)
    });

  }

}
