import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UIModule } from 'src/app/ui.module';
import { SubredditsGuard } from './guards/subreddits.guard';
import { SubredditsRoutingModule } from './subreddits-routing.module';
import { SubredditsComponent } from './subreddits.component';
import { SubredditService } from './subreddits.service';
import { EffectsModule } from '@ngrx/effects';
import { SubredditsEffects } from './store/subreddits.effects';

@NgModule({
  declarations: [SubredditsComponent],
  imports: [SubredditsRoutingModule, CommonModule, UIModule, EffectsModule.forFeature([SubredditsEffects])],
  providers: [SubredditService, SubredditsGuard],
})
export class SubredditsModule {}
