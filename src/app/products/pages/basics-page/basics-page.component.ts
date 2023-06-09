import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent {
  public nameLower: string = "juan";
  public nameUpper: string = "JUAN";
  public fullName: string = "jUaN mUñOz";

  public customDate : Date = new Date();
}
