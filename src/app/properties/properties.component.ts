import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { async, Observable } from 'rxjs';
import { AgentInfo } from '../models/agent.model';
import { Listings } from '../models/listings.model';
import { CommonServiceService } from '../service/common-service.service';
import { showAgent } from '../state/agent/agent.selector';
import { AppState } from '../state/app.state';
import { getList } from '../state/listings/listings.selectors';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {

  @Output() showComponent = new EventEmitter<boolean>(false);

  list: Observable<Listings[]> | undefined
  public agent: Observable<AgentInfo[]> | undefined

  specificDetail: any = [];

  constructor(private store: Store<AppState>, public commonService: CommonServiceService) { }

  // 🚀 LOADS THE AGENT INFO AND THE LISTINGS

  ngOnInit(): void {
    this.list = this.store.select(getList)
    this.agent = this.store.select(showAgent)
  }

  // 🚀 THIS FUNCTION OPENS THE PROPERTY DETAILS COMPONENT WHILE ALSO SENDING THE REQUIRED DATA THROUGH PROPERTY ID
  
  openSlider(obj: any) {
    this.commonService.setData(obj.propertyID);
    this.commonService.setLatLong(obj['geocode']['Latitude'], obj['geocode']['Longitude']);
    this.showComponent.emit(true);
  }

}
