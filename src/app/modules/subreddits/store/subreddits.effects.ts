import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { SubredditService } from '../subreddits.service';
import { GetSubreddits, GetSubredditsFailed, GetSubredditsSuccess, SubredditsActionTypes } from './subreddits.actions';

@Injectable()
export class SubredditsEffects {
  @Effect()
  getReddits$ = this.actions.pipe(
    ofType<GetSubreddits>(SubredditsActionTypes.GET_SUBREDDIT_POSTS),
    map(action => action.payload),
    switchMap(({ subreddit, nextPageToken, reset, type }) =>
      this.subredditService.getSubredditPosts(subreddit, nextPageToken, type).pipe(map(res => ({ ...res, reset }))),
    ),
    map(({ subreddits, nextPageToken, reset }) => new GetSubredditsSuccess({ subreddits, nextPageToken, reset })),
    catchError(err => of(new GetSubredditsFailed({ errorMessage: err.error.message }))),
  );

  constructor(private actions: Actions, private subredditService: SubredditService) {}
}
