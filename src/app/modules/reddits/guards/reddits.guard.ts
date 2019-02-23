import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/store.reducers';
import { GetRedditPosts } from '../store/reddits.actions';

@Injectable()
export class RedditsGuard implements CanActivate {
  constructor(private store: Store<IAppState>) {}

  canActivate(route: ActivatedRouteSnapshot) {
    const { type } = route.params;
    this.store.dispatch(new GetRedditPosts({ type, nextPageToken: '', reset: true }));
    return true;
  }
}
