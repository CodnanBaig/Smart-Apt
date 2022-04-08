import { Component, OnInit } from '@angular/core';
import { CommonServiceService } from '../service/common-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  // isShowSlider: boolean = false;

  parentData: any = [];

  constructor(public commonService: CommonServiceService) { }

  ngOnInit(): void {
  }

  showSliderComponent(event: boolean){
    this.commonService.isShowSlider = event;
  }

}
