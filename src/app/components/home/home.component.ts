import { trigger, state, style, transition, animate } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { delay } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity:1,transform: 'translateY(0)' })),
      transition('void => *', [
        style({ opacity:0,transform: 'translateY(100%)' }),
        animate(1000)
      ])
    ]),
    trigger('buttonFadeInOut', [
      state('in', style({ opacity:1,transform: 'translateY(0)' })),
      transition('void => *', [
        style({ opacity:0,transform: 'translateY(100%)' }),
        animate(1000)
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  info = [
    'Hola, soy Antonio Luis Aguado Campos. Muchas gracias por participar en mi Trabajo de Fin de Grado como muestra de ejemplo',
    'En este experimento usted va a utilizar unas gafas de eyetracking, estas gafas permiten la monitorización, seguimiento, control y estudio de sus movimientos oculares',
    'En el experimento se realizará una simulación de una compra por Internet, usted realiza la compra con total normalidad basándose en los criterios que usted elija',
    'Para realizar la compra usted irá navegando por el simulador del supermercado e irá añadiendo artículos según su criterio a este carrito',
    'Cuando desee finalizar la compra vaya al carrito y pulse en finalizar',
    'Con las gafas de eyetracking, yo realizaré un estudio de en qué elementos se fija usted más',
    'De nuevo, muchas gracias por su colaboración',
  ]

  currentInfoIndex: number = 0;

  ngOnInit(): void {
      setInterval(() => { 
        if (this.currentInfoIndex < this.info.length - 1) {
          this.currentInfoIndex++
        }
      }, 5000)
  }

}