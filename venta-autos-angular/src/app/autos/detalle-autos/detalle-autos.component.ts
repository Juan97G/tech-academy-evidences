import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AutosService} from "../../shared/autos.service";
import {Auto} from "../../classes/Auto";

@Component({
  templateUrl: './detalle-autos.component.html',
  styleUrls: ['./detalle-autos.component.css']
})
export class DetalleAutosComponent implements OnInit {

   tituloPagina: string = "Detalle de automóvil";
   infoAuto: Auto;

  constructor(private _activatedRoute: ActivatedRoute, private _autosService: AutosService, private _router: Router) {
      this.infoAuto = new Auto();
  }

  ngOnInit(): void {
      const idAuto = Number(this._activatedRoute.snapshot.paramMap.get("id"));
      this.infoAuto = this._autosService.obtenerAuto(idAuto);
  }

   onBack(): void {
     this._router.navigate(["/autos"]);
   }

}
