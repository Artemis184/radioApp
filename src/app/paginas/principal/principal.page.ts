import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { RadiosService } from 'src/app/servicios/radios.service';
import { IonicModule } from '@ionic/angular';
import { GeneralService } from 'src/app/servicios/general.service';




@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class PrincipalPage implements OnInit {
  listaradios: any[]=[];
  objRadioActiva:any={};
  bandera=false;
  file:any;

  constructor(
    private serv:RadiosService,
    private ServG: GeneralService
  ) { }

  ngOnInit() {
    this.cargarRadios();
  }




  accionarRadios(objRadio: any) {
    // Si hay una radio en reproducción, detenerla antes de cambiar
    if (this.file) {
      this.file.pause();
      this.file = null; // Liberar el objeto de audio
    }
  
    // Asignar la nueva radio activa
    this.objRadioActiva = objRadio;
  
    // Reproducir la nueva radio
    this.fun_playRadio(objRadio.url);
  }
  

  fun_playRadio(url: any){
    this.file=new Audio(url);
    this.file.play().then(
    (respuesta:any) => {
      console.log("radio ejecutando")
      this.ServG.fun_mensaje("radio ejecutando")
      this.bandera=true;
    },(err:any)=>{
      this.fun_pause();
      console.log("Error al ejecutar")
      this.ServG.fun_mensaje("error al ejecutar", "warning", 2100)
    }
  )

  }
  

  fun_play(){
    console.log("play")
    this.file.play();

  }


  fun_pause(){
    this.file.pause();
    console.log("pause")

  }


  fun_stop(){
    console.log("stop")

  }


  cargarRadios(){
    this.serv.getRadios().subscribe(
      (respuesta:any)=>{
        console.log(respuesta)
        this.listaradios=respuesta
      }
    )
  }

}
