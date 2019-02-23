import { createFeatureSelector } from '@ngrx/store';
import { SubredditsActions, SubredditsActionTypes } from './subreddits.actions';

export interface Post {
  title: string;
}

export interface SubredditsState {
  loading: boolean;
  type: string;
  subreddit: string;
  subreddits: Post[];
  nextPageToken: string;
}

export const initialState: SubredditsState = {
  loading: false,
  type: '',
  subreddit: '',
  subreddits: [],
  nextPageToken: '',
};

export function reducer(state = initialState, action: SubredditsActions): SubredditsState {
  switch (action.type) {
    case SubredditsActionTypes.GET_SUBREDDIT_POSTS: {
      const { subreddit, type } = action.payload;
      return {
        ...state,
        subreddit,
        type,
        loading: true,
      };
    }
    case SubredditsActionTypes.GET_SUBREDDIT_POSTS_SUCCESS: {
      const { subreddits, nextPageToken, reset } = action.payload;
      return {
        ...state,
        loading: false,
        subreddits: reset ? [...subreddits] : [...state.subreddits, ...subreddits],
        nextPageToken,
      };
    }
    case SubredditsActionTypes.GET_SUBREDDIT_POSTS_FAILED: {
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

export const getSubredditsState = createFeatureSelector<SubredditsState>('subreddits');
