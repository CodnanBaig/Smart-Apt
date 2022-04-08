import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Listings } from '../models/listings.model';
import { CommonServiceService } from '../service/common-service.service';
import { AppState } from '../state/app.state';
import { getList } from '../state/listings/listings.selectors';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {

  specificDetail: any = [];
  id: any;
  @Output() showComponent = new EventEmitter<boolean>(false);

  details: Observable<Listings[]> | undefined
  constructor(private store: Store<AppState>, public commonService: CommonServiceService) {

  }

  // 🚀 LOADS AND RETURNS THE DETAILS SENT THROUGH COMMON SERVICE ON PROPERTY CLICK FROM THE PROPERTY COMPONENT

  ngOnInit(): void {
    this.commonService.data.subscribe(res => {
      this.store.select(getList).subscribe(response => {
        this.specificDetail = [];
        this.specificDetail = response.find(objs => objs.propertyID == res);
      })
    })
  }

  // 🚀 CLOSES THE PROPERTY DETAILS COMPONENT
  
  closeSlide() {
    this.showComponent.emit(false);
    this.commonService.isShowSlider = false;
  }

}
