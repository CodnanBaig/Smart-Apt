import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Listings } from '../models/listings.model';
import { CommonServiceService } from '../service/common-service.service';
import { AppState } from '../state/app.state';
import { getList } from '../state/listings/listings.selectors';
import { getListSpecific } from '../state/property-details/property-details.selector';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {

  specificDetail: any = [];
  id: any;

  details: Observable<Listings[]> | undefined
  constructor(private store: Store<AppState>, public commonService: CommonServiceService) {
    this.commonService.data.subscribe(res => {
      this.getSpecificFloorPlan(res)
    })
   }

  ngOnInit(): void {
    this.getSpecificFloorPlan(this.commonService.data);
  }

  getSpecificFloorPlan(id: any) {
    this.store.select(getList).subscribe(response => {
      this.specificDetail = [];
      this.specificDetail = response.find(objs => objs.propertyID == id);
      this.commonService.getLatLong(this.specificDetail?.geocode.Latitude, this.specificDetail?.geocode.Longitude)
    })
  }

}
