import { Component } from '@angular/core';
import { SwapiProvider } from '../swapi.service';

@Component({
  selector: 'app-about',
  templateUrl: 'about.page.html',
  styleUrls: ['about.page.scss']
})
export class AboutPage {
  public datos;

  constructor(public dataService: SwapiProvider) {
    console.log('about');
    this.dataService.get('vehicles');
    this.dataService.detailedData$.subscribe(resp => {
      this.datos = resp;
    });
      
  }

  OnInit() {
  }
}
