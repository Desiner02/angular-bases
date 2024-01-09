import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-heroes-hero',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeroComponent],
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})

export class HeroComponent {

  public name: string ='elementhos';
  public age: number = 45;

  get capitalizeName() : string{

    return this.name.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name}-${this.age}:`
  }

  changeHero():void{
    this.name ='nombre03';
  }

  CambiarEdad():void{
    this.age = 50;
  }




}




