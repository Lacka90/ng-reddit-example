import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, switchMap, catchError } from 'rxjs/operators';
import { RedditsService } from '../reddits.service';
import { GetRedditPosts, GetRedditPostsSuccess, RedditsActionTypes, GetRedditPostsFailed } from './reddits.actions';
import { of } from 'rxjs';

@Injectable()
export class RedditsEffects {
  @Effect()
  getReddits$ = this.actions.pipe(
    ofType<GetRedditPosts>(RedditsActionTypes.GET_REDDIT_POSTS),
    map(action => action.payload),
    switchMap(({ nextPageToken, reset, type }) =>
      this.reddits.getRedditPosts(nextPageToken, type).pipe(map(res => ({ ...res, reset }))),
    ),
    map(({ reddits, nextPageToken, reset }) => new GetRedditPostsSuccess({ reddits, nextPageToken, reset })),
    catchError(err => of(new GetRedditPostsFailed({ errorMessage: err.error.message }))),
  );

  constructor(private actions: Actions, private reddits: RedditsService) {}
}
