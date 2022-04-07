import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonServiceService {

  public lat: Subject<string> = new Subject<string>()
  public long: Subject<string> = new Subject<string>()
  public data: Subject<any> = new Subject<any>();
  // currentData = this.data.asObservable();

  constructor() { }

  setData(id: number) {
    this.data.next(id);
  }

  getLatLong(lat: string, long: string) {
    this.lat.next(lat)
    this.long.next(long)
  }
}
