import {Auto} from "../classes/Auto";
import {Injectable} from "@angular/core";

@Injectable({
   providedIn: "root"
})

export class AutosService {

   listaAutos: Auto[] = [];

   obtenerListaAutos(): Auto[] {
      this.listaAutos = this.llenarListaAutos();
      return this.listaAutos;
   }

   obtenerAuto(idAuto: number): Auto {
      return this.listaAutos.find((auto) => auto.id === idAuto)!;
   }

   private llenarListaAutos(): Auto[] {
      return [
         {
            id: 1,
            marca: 'Alfa Romeo',
            modelo: 'Giulia Veloce',
            anio: 2018,
            color: 'Rojo',
            kms: 45200,
            precio: 325600000,
            calificacion: 5,
            urlImage: 'assets/imagenesAutos/alfaromeo.jpg'
         },
         {
            id: 2,
            marca: 'Rolls-Royce',
            modelo: 'Phantom',
            anio: 2021,
            color: 'Plata',
            kms: 12800,
            precio: 540562000,
            calificacion: 4,
            urlImage: 'assets/imagenesAutos/rolls-royce.jpg'
         },
         {
            id: 3,
            marca: 'Ferrari',
            modelo: 'Portofino',
            anio: 2019,
            color: 'Negro',
            kms: 24630,
            precio: 395450000,
            calificacion: 2,
            urlImage: 'assets/imagenesAutos/ferrari.jpg'
         },
         {
            id: 4,
            marca: 'Land Rover',
            modelo: 'Range Rover',
            anio: 2016,
            color: 'Blanco',
            kms: 96420,
            precio: 240600000,
            calificacion: 5,
            urlImage: 'assets/imagenesAutos/land-rover.jpg'
         },
         {
            id: 5,
            marca: 'Porsche',
            modelo: 'Cayman',
            anio: 2022,
            color: 'Celeste',
            kms: 3600,
            precio: 487560000,
            calificacion: 3,
            urlImage: 'assets/imagenesAutos/porsche.jpg'
         },
      ];
   }
}
