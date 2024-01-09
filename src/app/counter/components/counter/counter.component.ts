import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';



@Component({
    selector: 'app-counter',
    standalone: true,
    imports: [CommonModule, RouterOutlet, CounterComponent],
    template: `
        <h3>{{counter}}</h3>
        <button (click)="increaseBy(+1)">+1</button>
        <button (click)="resetBy()">Reset</button>
        <button (click)="increaseBy(-1)">-1</button>
    `
})

export class CounterComponent {
    public title: string = 'Mi primera app de Angular';
    public counter: number =10;

    increaseBy (value:number):void{
        this.counter +=value;
    }
    resetBy ():void{
        this.counter =10;
    }


}
