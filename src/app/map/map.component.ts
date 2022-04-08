import { Map, NavigationControl, Marker } from 'maplibre-gl';
import { Component, OnInit, ViewChild, OnChanges, ElementRef, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Geocode } from '../models/geocode.model';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { getMap } from '../state/map/map.selector';
import { CommonServiceService } from '../service/common-service.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {

  mapLngLat: any = []
  lat: any
  long: any
  coOrd: any
  map!: Map;
  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;
  public geo: Observable<Geocode[]> | undefined

  constructor(private store: Store<AppState>, public commonService: CommonServiceService) {
    this.coOrd = commonService.setLatLong(this.lat, this.long)

    this.commonService.coOrdinateObject.subscribe(res => {
      this.zoomLatLong(res['long'], res['lat'])
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    this.map = new Map({
      container: this.mapContainer.nativeElement,
      style: `${environment.smartStyle}${environment.maptileKey}`,
      center: [parseFloat(this.long) || -97.420898, parseFloat(this.lat) || 32.69929],
      zoom: 12
    });
    this.map.addControl(new NavigationControl(), 'top-left')

    this.store.select(getMap).subscribe(res => {
      res.forEach((el, index) => {
        const initialState = { lng: parseFloat(el.Longitude), lat: parseFloat(el.Latitude) }
        let marker = new Marker({ color: "#FF0000" })
          .setLngLat([initialState.lng, initialState.lat])
          .addTo(this.map);
      })
    })
  }

  ngOnDestroy(): void {
    this.map?.remove();
  }

  zoomLatLong(long: any, lat: any){
    this.map.flyTo({
      center: [long, lat],
      zoom: 20,
      speed: 1
    })
  }

}

