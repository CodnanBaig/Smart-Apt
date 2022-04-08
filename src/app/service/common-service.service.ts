import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  public data: Subject<any> = new Subject<any>();
  public coOrdinateObject = new Subject<any>();

  public isShowSlider: boolean = false;

  constructor() { }

  // 🚀 SELECTS AND SENDS DATA BY PROPERTY ID

  setData(id: number) {
    this.data.next(id);
  }

  // 🚀 SENDS THE COORDINATES TO THE MAP COMPONENT ON PORPERTY CLICK

  setLatLong(lat: string, long: string) {
    let obj = { lat: lat, long: long}
    this.coOrdinateObject.next(obj);    
  }
}
