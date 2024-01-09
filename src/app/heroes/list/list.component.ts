import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-heroes-list',
  standalone: true,
  imports: [CommonModule, RouterOutlet, ListComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})

export class ListComponent {

 public heroNames: string[] = ['spiderman','dos','tres','cuatro'];
 public deleteHero?: string;

 //metodo
  removeLastHero():void{
    this.deleteHero = this.heroNames.pop();


  }



}
