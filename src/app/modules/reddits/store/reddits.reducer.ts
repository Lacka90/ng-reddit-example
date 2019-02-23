import { RedditsActions, RedditsActionTypes } from './reddits.actions';
import { createFeatureSelector } from '@ngrx/store';

export interface Post {
  title: string;
  thumbnail: string;
  subreddit: string;
  subreddit_name_prefixed: string;
  score: number;
  created: number;
  permalink: string;
  url: string;
}

export interface RedditsState {
  loading: boolean;
  type: string;
  reddits: Post[];
  nextPageToken: string;
}

export const initialState: RedditsState = {
  loading: false,
  type: '',
  reddits: [],
  nextPageToken: '',
};

export function reducer(state = initialState, action: RedditsActions): RedditsState {
  switch (action.type) {
    case RedditsActionTypes.GET_REDDIT_POSTS: {
      return {
        ...state,
        type: action.payload.type,
        loading: true,
      };
    }
    case RedditsActionTypes.GET_REDDIT_POSTS_SUCCESS: {
      const { reddits, nextPageToken, reset } = action.payload;
      return {
        ...state,
        loading: false,
        reddits: reset ? [...reddits] : [...state.reddits, ...reddits],
        nextPageToken,
      };
    }
    case RedditsActionTypes.GET_REDDIT_POSTS_FAILED: {
      return {
        ...state,
        loading: false,
      };
    }
    default: {
      return state;
    }
  }
}

export const getRedditsState = createFeatureSelector<RedditsState>('reddits');
