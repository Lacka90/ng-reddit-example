import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/store.reducers';
import { GetSubreddits } from './store/subreddits.actions';
import { getSubredditsState, SubredditsState } from './store/subreddits.reducer';

@Component({
  selector: 'app-subreddits',
  templateUrl: './subreddits.component.html',
  styleUrls: ['./subreddits.component.scss'],
})
export class SubredditsComponent {
  subredditsState$ = this.store.pipe(select(getSubredditsState));

  constructor(private store: Store<IAppState>, private router: Router, private route: ActivatedRoute) {}

  scrolled(state: SubredditsState) {
    const { subreddit, nextPageToken, type } = state;
    this.store.dispatch(new GetSubreddits({ subreddit, nextPageToken, reset: false, type }));
  }

  changeSort(state: { value: string }) {
    const type = state.value;
    this.router.navigate(['..', type], { relativeTo: this.route });
  }
}
