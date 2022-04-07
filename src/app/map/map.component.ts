import { Map, NavigationControl, Marker } from 'maplibre-gl';
import { Component, OnInit, OnChanges ,ViewChild, ElementRef, AfterViewInit, OnDestroy, SimpleChanges } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Geocode } from '../models/geocode.model';
import { Store } from '@ngrx/store';
import { AppState } from '../state/app.state';
import { getMap } from '../state/map/map.selector';
import { getList } from '../state/listings/listings.selectors';
import { CommonServiceService } from '../service/common-service.service';
import * as maplibregl from 'maplibre-gl';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit, AfterViewInit, OnDestroy, OnChanges {

  mapLngLat :any = []
  lat: any
  long: any
  map!: Map;
  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;
  public geo: Observable<Geocode[]> | undefined
  constructor(private store: Store<AppState>, public commonService: CommonServiceService) { 
    this.lat = this.commonService.lat.subscribe(res => {
      console.log(res)
    })
    this.long = this.commonService.long.subscribe(res => {
      console.log(res)
    })
    
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("resss => ", this.commonService.data)
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

   flyTo(map: Map, mapPoint: Geocode): any {
    let val: maplibregl.LngLat = new maplibregl.LngLat(parseFloat(this.long), parseFloat(this.lat));
    map.flyTo({
      center: val,
      duration: 2000,
      zoom: 15,
    });
   }
  ngOnDestroy(): void {
    this.map?.remove();
  }

  

}

