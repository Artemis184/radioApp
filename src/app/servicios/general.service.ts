import { Injectable } from '@angular/core';

import { ToastController } from '@ionic/angular/standalone'

@Injectable({
  providedIn: 'root'
})
export class GeneralService {

  constructor(private toast: ToastController) { }



  async fun_mensaje(mensaje:string, color:string="success", tiempo:number=1500){
    let t = await this.toast.create({
      message: mensaje,
      duration: tiempo,
      color: color
    });
    t.present();

  }



}
