import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';
import {faStar} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-estrellas',
  templateUrl: './estrellas.component.html',
  styleUrls: ['./estrellas.component.css']
})
export class EstrellasComponent implements OnChanges {

   iconStar = faStar;
   arrayStars: any[] = [];

   @Input() calificacion: number = 0;

   ngOnChanges(changes:SimpleChanges) {
      this.arrayStars = [];
      for (let i = 0; i < this.calificacion ; i++) {
         this.arrayStars.push(1);
      }
   }

}
