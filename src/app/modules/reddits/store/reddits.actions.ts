import { Action } from '@ngrx/store';
import { Post } from './reddits.reducer';

export enum RedditsActionTypes {
  GET_REDDIT_POSTS = '[Reddits] Get reddits',
  GET_REDDIT_POSTS_SUCCESS = '[Reddits] Get reddits success',
  GET_REDDIT_POSTS_FAILED = '[Reddits] Get reddits failed',
}

export class GetRedditPosts implements Action {
  readonly type = RedditsActionTypes.GET_REDDIT_POSTS;
  constructor(public payload: { nextPageToken: string; reset: boolean; type: string }) {}
}

export class GetRedditPostsSuccess implements Action {
  readonly type = RedditsActionTypes.GET_REDDIT_POSTS_SUCCESS;
  constructor(public payload: { reddits: Post[]; nextPageToken: string; reset: boolean }) {}
}

export class GetRedditPostsFailed implements Action {
  readonly type = RedditsActionTypes.GET_REDDIT_POSTS_FAILED;
  constructor(public payload: { errorMessage: string }) {}
}

export type RedditsActions = GetRedditPosts | GetRedditPostsSuccess | GetRedditPostsFailed;
