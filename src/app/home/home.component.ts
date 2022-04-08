import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isShowSlider: boolean = false;

  parentData: any = [];

  constructor() { }

  ngOnInit(): void {
  }

  showSliderComponent(event: boolean){
    this.isShowSlider = event;
    this.isShowSlider!= event
  }

}
