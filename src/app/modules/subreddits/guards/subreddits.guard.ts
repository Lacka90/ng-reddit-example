import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/store.reducers';
import { GetSubreddits } from '../store/subreddits.actions';

@Injectable()
export class SubredditsGuard implements CanActivate {
  constructor(private store: Store<IAppState>) {}

  canActivate(route: ActivatedRouteSnapshot) {
    const { type, subreddit } = route.params;
    this.store.dispatch(new GetSubreddits({ subreddit, nextPageToken: '', reset: true, type }));
    return true;
  }
}
