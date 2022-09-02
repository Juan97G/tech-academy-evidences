import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

   titleCard: string = "Registro de Clientes";
   checkContacto: boolean = false;

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  /* FUNCTIONS */

   redirectToInicio(): void {
      this._router.navigate(["/inicio"])
   }

   handleChangeContact(): void {
      this.checkContacto = !this.checkContacto;
   }

   handleSubmit(): void {
      alert("Registro exitoso!")
      this._router.navigate(["/autos"]);
   }

}
