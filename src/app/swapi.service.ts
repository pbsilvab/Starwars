
import { Injectable, isDevMode } from '@angular/core';
import { Subject, Observable } from 'rxjs'
import { HttpClient } from '@angular/common/http'
import { map } from 'rxjs/operators'
import { DataApi } from './structures/datapi.structure';
import { People } from './structures/people.struture';

@Injectable({
  providedIn: 'root'
})

export class SwapiProvider {
  public dataServices: Subject<any>;
  public detailedData$: Observable<any>;
  public finalizarConsultaPersonajes: boolean = false;
  public alert: any;
  public peopleArr = [];
  endpoint: string = "https://cors-anywhere.herokuapp.com/https://swapi.co/api/";
  
  constructor(private http: HttpClient) {
    this.get('people'); 
  }
  reloadService(argType){
    this.dataServices = new Subject<any>();
    this.detailedData$ = this.dataServices.asObservable().pipe(
      map((data: any) => {
        let objVehicles = this.structureVehivles(data);

        let structurarData: DataApi = {
          serviceName:argType,
          cantidad: data.count,
          next: data.next,
          previous: data.previous,
          result: objVehicles
        }
        console.log(structurarData);
        return structurarData
      })
    );
  }
  get(argType) {
    this.reloadService(argType);
    let arg: string = argType;
    let url = this.endpoint + arg;
    this.subs(argType, url);

    console.log('get-fired', url);
  }

  subs(arg, url) {
    switch (arg) {
      case "starships":
        if (isDevMode()) {
          url = '../assets/starships.json';
        }
        break;
      case "films":
        if (isDevMode()) {
          url = '../assets/films.json';
        }
        break;
      case "vehicles":
        if (isDevMode()) {
          url = '../assets/vehicles.json';
        }
        break;
      case "people":
        if (isDevMode()) {
          //url = '../assets/people.json';
        }
        this.http.get(url).subscribe((datos: any) => {
          this.structureData(datos);
        });
        return;
    }
    this.http.get(url).subscribe(this.dataServices);
  }

  structureData(data: any) {

    var Personajes = this.peopleArr || Personajes.push(this.peopleArr);

    data.results.forEach((element, index) => {

      let key = element.url;
      var person: People = Personajes[key] || {};

      person = {
        name: element.name,
        height: element.height,
        mass: element.mass,
        hair_color: element.hair_color,
        skin_color: element.skin_color,
        eye_color: element.eye_color,
        birth_year: element.birth_year,
        gender: element.gender
      };

      Personajes[key] = person

    });
    this.peopleArr = Personajes;

    if (data.next) {
      this.subs('people', data.next);
    } else {
      this.finalizarConsultaPersonajes = true;
    }
  }

  structureVehivles(data){
    var naves = [];

    data.results.forEach((element, index) => {
      
      if(element.director){
        naves[index] = {
          director: element.director,          
          title: element.title,          
          url: element.url,
          characters: element.characters    
        }
      }else{
        naves[index] = {
          name: element.name,
          length: element.length,
          manufacturer: element.manufacturer,
          model: element.model,
          url: element.url,
        }
      }
      
    });

    return naves;
  }

}

