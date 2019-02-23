import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/top',
    pathMatch: 'full',
  },
  {
    path: 'subreddit/:subreddit',
    loadChildren: './modules/subreddits/subreddits.module#SubredditsModule',
  },
  {
    path: ':type',
    loadChildren: './modules/reddits/reddits.module#RedditsModule',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
