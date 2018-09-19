import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {
  public personaje: any;

  constructor(public route: ActivatedRoute, public router:Router) { }

  ngOnInit() {
    this.route.params.subscribe(data => {
      this.personaje = data;
    })
  }

  goback(){
    this.router.navigate(['/tabs/(contact:contact)']);
  }

}
