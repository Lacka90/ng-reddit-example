import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

const url = (subreddit, type) => `https://www.reddit.com/r/${subreddit}${type ? `/${type}` : ''}.json`;

@Injectable()
export class SubredditService {
  constructor(private http: HttpClient) {}

  getSubredditPosts(subreddit: string, after?: string, type?: string) {
    return this.http.get<any>(`${url(subreddit, type)}${after ? `?after=${after}` : ''}`).pipe(
      map(({ data: { after: nextPageToken, children } }) => {
        return { subreddits: children.map(c => c.data), nextPageToken };
      }),
    );
  }
}
