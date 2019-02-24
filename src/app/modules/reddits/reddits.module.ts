import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from 'src/app/shared/sharded.module';
import { UIModule } from '../../ui/ui.module';
import { RedditsGuard } from './guards/reddits.guard';
import { RedditsRoutingModule } from './reddits-routing.module';
import { RedditsComponent } from './reddits.component';
import { RedditsService } from './reddits.service';
import { RedditsEffects } from './store/reddits.effects';

@NgModule({
  declarations: [RedditsComponent],
  imports: [RedditsRoutingModule, CommonModule, UIModule, SharedModule, EffectsModule.forFeature([RedditsEffects])],
  providers: [RedditsService, RedditsGuard],
})
export class RedditsModule {}
