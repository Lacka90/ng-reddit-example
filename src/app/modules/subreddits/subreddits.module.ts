import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { SharedModule } from 'src/app/shared/sharded.module';
import { UIModule } from '../../ui/ui.module';
import { SubredditsGuard } from './guards/subreddits.guard';
import { SubredditsEffects } from './store/subreddits.effects';
import { SubredditsRoutingModule } from './subreddits-routing.module';
import { SubredditsComponent } from './subreddits.component';
import { SubredditService } from './subreddits.service';

@NgModule({
  declarations: [SubredditsComponent],
  imports: [
    SubredditsRoutingModule,
    CommonModule,
    UIModule,
    SharedModule,
    EffectsModule.forFeature([SubredditsEffects]),
  ],
  providers: [SubredditService, SubredditsGuard],
})
export class SubredditsModule {}
