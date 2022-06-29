import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { LocationComponent } from '../location.component';
import { ReadLocationComponent } from '../read-location/read-location.component';
import { SkeletonLocationComponent } from '../skeleton-location/skeleton-location.component';
import { LocationRoutingModule } from './location-routing.module';

@NgModule({
	declarations: [LocationComponent, SkeletonLocationComponent, ReadLocationComponent],
	imports: [CommonModule, LocationRoutingModule, SharedModule],
})
export class LocationModule {}
