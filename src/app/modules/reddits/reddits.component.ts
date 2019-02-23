import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { fromEvent } from 'rxjs';
import { debounceTime, withLatestFrom, takeUntil } from 'rxjs/operators';
import { IAppState } from 'src/app/store/store.reducers';
import { GetRedditPosts } from './store/reddits.actions';
import { getRedditsState } from './store/reddits.reducer';

@Component({
  selector: 'app-reddits',
  templateUrl: './reddits.component.html',
  styleUrls: ['./reddits.component.scss'],
})
export class RedditsComponent implements OnInit {
  redditsState$ = this.store.pipe(select(getRedditsState));

  constructor(private store: Store<IAppState>, private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    fromEvent(window, 'scroll')
      .pipe(
        debounceTime(250),
        withLatestFrom(this.redditsState$),
      )
      .subscribe(([_, state]) => {
        if (window.scrollY + window.innerHeight >= document.body.offsetHeight) {
          const { nextPageToken, type } = state;
          this.store.dispatch(new GetRedditPosts({ nextPageToken, reset: false, type }));
        }
      });
  }

  changeSort(state) {
    const type = state.value;
    this.router.navigate(['..', type], { relativeTo: this.route });
  }
}
