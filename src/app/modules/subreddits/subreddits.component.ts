import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { fromEvent } from 'rxjs';
import { debounceTime, withLatestFrom } from 'rxjs/operators';
import { IAppState } from 'src/app/store/store.reducers';
import { GetSubreddits } from './store/subreddits.actions';
import { getSubredditsState } from './store/subreddits.reducer';

@Component({
  selector: 'app-subreddits',
  templateUrl: './subreddits.component.html',
  styleUrls: ['./subreddits.component.scss'],
})
export class SubredditsComponent implements OnInit {
  subredditsState$ = this.store.pipe(select(getSubredditsState));

  constructor(private store: Store<IAppState>, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    fromEvent(window, 'scroll')
      .pipe(
        debounceTime(250),
        withLatestFrom(this.subredditsState$),
      )
      .subscribe(([_, state]) => {
        if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
          const { subreddit, nextPageToken, type } = state;
          this.store.dispatch(new GetSubreddits({ subreddit, nextPageToken, reset: false, type }));
        }
      });
  }

  changeSort(state) {
    const type = state.value;
    this.router.navigate(['..', type], { relativeTo: this.route });
  }
}
