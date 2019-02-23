import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { RedditsGuard } from './guards/reddits.guard';
import { RedditsRoutingModule } from './reddits-routing.module';
import { RedditsComponent } from './reddits.component';
import { RedditsService } from './reddits.service';
import { RedditsEffects } from './store/reddits.effects';
import { UIModule } from '../../ui.module';

@NgModule({
  declarations: [RedditsComponent],
  imports: [
    RedditsRoutingModule,
    CommonModule,
    UIModule,
    InfiniteScrollModule,
    EffectsModule.forFeature([RedditsEffects]),
  ],
  providers: [RedditsService, RedditsGuard],
})
export class RedditsModule {}
