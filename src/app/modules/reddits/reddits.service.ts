import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Post } from './store/reddits.reducer';

const url = (type = '') => `https://www.reddit.com/${type}.json`;

export interface ListResponse {
  kind: string;
  data: {
    after: string | null;
    before: string | null;
    children: {
      kind: string;
      data: Post;
    }[];
  };
}

@Injectable()
export class RedditsService {
  constructor(private http: HttpClient) {}

  getRedditPosts(after: string, type?: string) {
    return this.http.get<ListResponse>(`${url(type)}${after ? `?after=${after}` : ''}`).pipe(
      map(({ data: { after: nextPageToken, children } }) => {
        return { reddits: children.map(c => c.data), nextPageToken };
      }),
    );
  }
}
