import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  // public lat: Subject<string> = new Subject<string>()
  // public long: Subject<string> = new Subject<string>()
  public data: Subject<any> = new Subject<any>();
  public coOrdinateObject = new Subject<any>();

  public isShowSlider: boolean = false;

  constructor() { }

  setData(id: number) {
    this.data.next(id);
  }

  setLatLong(lat: string, long: string) {
    // this.lat.next(lat)
    // this.long.next(long)
    let obj = { lat: lat, long: long}
    this.coOrdinateObject.next(obj);    
  }
}
