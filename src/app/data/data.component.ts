import { Component, OnInit, Input } from '@angular/core';
import { DataApi } from '../structures/datapi.structure';
import { Data } from '@angular/router';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss'],
})
export class DataComponent implements OnInit {
  private _data;
  
  @Input() 
  set data(data: DataApi){
    this._data = data || '<no data set>';
  }
  get data():DataApi{
    return this._data;
  }

  constructor() { 

  }

  ngOnInit() {

  }

}
