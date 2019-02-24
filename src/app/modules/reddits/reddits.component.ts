import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { IAppState } from 'src/app/store/store.reducers';
import { GetRedditPosts } from './store/reddits.actions';
import { getRedditsState, RedditsState } from './store/reddits.reducer';

@Component({
  selector: 'app-reddits',
  templateUrl: './reddits.component.html',
  styleUrls: ['./reddits.component.scss'],
})
export class RedditsComponent {
  redditsState$ = this.store.pipe(select(getRedditsState));

  constructor(private store: Store<IAppState>, private router: Router, private route: ActivatedRoute) {}

  scrolled(state: RedditsState) {
    const { nextPageToken, type } = state;
    this.store.dispatch(new GetRedditPosts({ nextPageToken, reset: false, type }));
  }

  changeSort(state) {
    const type = state.value;
    this.router.navigate(['..', type], { relativeTo: this.route });
  }
}
