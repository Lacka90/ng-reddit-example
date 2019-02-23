import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { RedditsGuard } from './guards/reddits.guard';
import { RedditsComponent } from './reddits.component';

export const redditsRoutes: Route[] = [
  {
    path: '',
    component: RedditsComponent,
    canActivate: [RedditsGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(redditsRoutes)],
  exports: [RouterModule],
})
export class RedditsRoutingModule {}
