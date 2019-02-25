import { Action } from '@ngrx/store';
import { Post } from './subreddits.reducer';

export enum SubredditsActionTypes {
  GET_SUBREDDIT_POSTS = '[Subreddits] Get subreddits',
  GET_SUBREDDIT_POSTS_SUCCESS = '[Subreddits] Get subreddits success',
  GET_SUBREDDIT_POSTS_FAILED = '[Subreddits] Get subreddits failed',
}

export class GetSubreddits implements Action {
  readonly type = SubredditsActionTypes.GET_SUBREDDIT_POSTS;
  constructor(public payload: { subreddit: string; nextPageToken: string; reset: boolean; type: string }) {}
}

export class GetSubredditsSuccess implements Action {
  readonly type = SubredditsActionTypes.GET_SUBREDDIT_POSTS_SUCCESS;
  constructor(public payload: { subreddits: Post[]; nextPageToken: string; reset: boolean }) {}
}

export class GetSubredditsFailed implements Action {
  readonly type = SubredditsActionTypes.GET_SUBREDDIT_POSTS_FAILED;
  constructor(public payload: { errorMessage: string }) {}
}

export type SubredditsActions = GetSubreddits | GetSubredditsSuccess | GetSubredditsFailed;
