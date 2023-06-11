import { Component } from '@angular/core';
import { Color, IHero } from '../../interfaces/hero.interface';

@Component({
  selector: 'app-order-page',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  public isUpperCase : boolean = false;

  public sortBy? : keyof IHero;

  public heroes : IHero[] = [
    {
      name : 'superman',
      canFly : true,
      color : Color.blue
    },
    {
      name : 'batman',
      canFly : false,
      color : Color.black
    },
    {
      name : 'daredevil',
      canFly : false,
      color : Color.red
    },
    {
      name : 'robin',
      canFly : false,
      color : Color.red
    },
    {
      name : 'linterna verde',
      canFly : true,
      color : Color.green
    },
  ]

  public toggleUpperCase () : void {
    this.isUpperCase = !this.isUpperCase;
  }

  public changeOrder (value : keyof IHero) : void {
    this.sortBy = value;
  }
}
