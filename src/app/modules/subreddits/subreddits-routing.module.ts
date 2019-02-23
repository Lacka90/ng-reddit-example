import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { SubredditsComponent } from './subreddits.component';
import { SubredditsGuard } from './guards/subreddits.guard';

export const subredditsRoutes: Route[] = [
  {
    path: '',
    redirectTo: 'top',
    pathMatch: 'prefix',
  },
  {
    path: ':type',
    component: SubredditsComponent,
    canActivate: [SubredditsGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(subredditsRoutes)],
  exports: [RouterModule],
})
export class SubredditsRoutingModule {}
