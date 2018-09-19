import { Component, OnInit, OnDestroy} from '@angular/core';
import { SwapiProvider } from '../swapi.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage implements  OnInit{
  public datos;
  private subscription: Subscription

  constructor(public dataService: SwapiProvider){
  }
  
  ngOnInit(){
    console.log('homepage');
    this.dataService.get('starships');
    this.dataService.detailedData$.subscribe(resp=>{
      this.datos = resp;
    });
  }

  ionViewDidLeave() {
    this.subscription.unsubscribe();
    console.log(545);
  }

}
