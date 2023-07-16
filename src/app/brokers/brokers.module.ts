import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrokersRoutingModule } from './brokers-routing.module';
import { BrokersComponent } from './brokers.component';
import { BrokersService } from './services/brokers.service';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { brokersReducer } from './state/brokers.reducers';
import { BrokersEffects } from './state/brokers.effects';


@NgModule({
  declarations: [
    BrokersComponent
  ],
  imports: [
    CommonModule,
    BrokersRoutingModule,
    StoreModule.forFeature('brokers', brokersReducer),
    EffectsModule.forFeature([BrokersEffects])
  ],
  providers: [
    BrokersService
  ]
})
export class BrokersModule { }
