import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MapComponent } from './map/map.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'floor-plan/:id', component: PropertyDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
