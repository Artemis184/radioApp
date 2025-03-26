import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { RadiosService } from 'src/app/servicios/radios.service';
import { IonicModule } from '@ionic/angular';


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

  constructor(private serv:RadiosService) { }

  ngOnInit() {
    this.cargarRadios();
  }




  accionarRadios(objRadio: any){
    //console.log(objRadio.nombre)
    this.objRadioActiva=objRadio;
    if(this.bandera){
      this.bandera=true;
      this.file
    }
    //activar la radio
    this.fun_playRadio(objRadio.url);
  }

  fun_playRadio(url: any){
    this.file=new Audio(url);
    this.file.play().then(
    
    (respuesta:any) => {
      console.log("radio ejecutando")
    },(err:any)=>{
      console.log("Error al ejecutar")
    }
  )
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
