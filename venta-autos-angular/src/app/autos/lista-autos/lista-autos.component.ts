import {Component, OnInit} from "@angular/core";
import {Auto} from "../../classes/Auto";
import {AutosService} from "../../shared/autos.service";


@Component({
   selector: 'lista-autos',
   templateUrl: './lista-autos.component.html',
   styleUrls: ['./lista-autos.component.css']
})

export class ListaAutosComponent implements OnInit{
   tituloListaAutos: string = "Lista de Automóviles";
   muestraImagen: boolean = false;
   imageWidth: number = 200;
   imageMargin: number = 2;
   arregloAutos: Auto[] = [];
   arregloAutosFilter: Auto[] = [];

   private _filtro: string = "";

   get filtro(): string {
      return this._filtro;
   }

   set filtro(filtro: string) {
      this._filtro = filtro;
      this.arregloAutosFilter = this.arregloAutos.filter(
         (auto) => auto.marca.toLowerCase().includes(filtro.toLowerCase())
      );
   }

   constructor(private _autosService: AutosService) {
   }

   ngOnInit() {
      this.arregloAutos = this._autosService.obtenerListaAutos();
      this.arregloAutosFilter = this.arregloAutos;
   }

   /* FUNCTIONS */
   toggleViewImage(): void {
      this.muestraImagen = !this.muestraImagen;
   }
}
