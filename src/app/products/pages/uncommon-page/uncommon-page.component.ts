import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent {

  //i18n Select
  public name : string = "Juan";
  public gender : 'male' | 'female' = 'male';
  public invitationMap = {
    male : 'invitarlo',
    female : 'invitarla'
  }

  public changeClient () :void {
    this.name = 'Aleja';
    this.gender = 'female';
  }

  //i18n Plural
  public clients : string[] = ['maria', 'pedro','juan','aleja','prunia'];

  public clientsMap = {
    '=0' : 'no hay ningún cliente esperando',
    '=1' : 'tenemos un cliente esperando',
    'other' : 'tenemos # clientes esperando'
  }

  public deleteClient() : void {
    this.clients.shift();
  }

  //Key value pipe
  public person = {
    name : 'Juan',
    age : 30,
    address : 'Bogotá'
  }

  //Async pipe
  public myObservableTime = interval(2000);
}
