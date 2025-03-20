import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { RadiosService } from 'src/app/servicios/radios.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.page.html',
  styleUrls: ['./principal.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule]
})
export class PrincipalPage implements OnInit {
  listaradios: any[]=[];

  constructor(private serv:RadiosService) { }

  ngOnInit() {
    this.cargarRadios();
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
