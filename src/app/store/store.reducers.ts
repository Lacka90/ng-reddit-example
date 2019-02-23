import { ActionReducerMap } from '@ngrx/store';
import * as redditsReducer from '../modules/reddits/store/reddits.reducer';
import * as subredditsReducer from '../modules/subreddits/store/subreddits.reducer';

export interface IAppState {
  reddits: redditsReducer.RedditsState;
  subreddits: subredditsReducer.SubredditsState;
}

export const reducers: ActionReducerMap<IAppState> = {
  reddits: redditsReducer.reducer,
  subreddits: subredditsReducer.reducer,
};
