import { Component } from '@angular/core';
import { SwapiProvider } from '../swapi.service';
import { LoadingController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss']
})
export class ContactPage {
  public datos: any;
  public display = false;
  public loading: any;

  constructor(public service: SwapiProvider, public load: LoadingController, public route: Router) {

    this.service.get('films');
    this.displayItems();
  }

  displayItems() {
    this.service.detailedData$.subscribe((data: any) => {
      this.datos = data; 
    })
  }
  displayInfo(personaje) {
    this.route.navigate(['info', personaje ]);
  }

}
