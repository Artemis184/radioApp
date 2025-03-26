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

  constructor(private serv:RadiosService) { }

  ngOnInit() {
    this.cargarRadios();
  }




  accionarRadios(objRadio: any){
    //console.log(objRadio.nombre)
    this.objRadioActiva=objRadio;
    this.bandera=true;
    //console.log("ok")
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
