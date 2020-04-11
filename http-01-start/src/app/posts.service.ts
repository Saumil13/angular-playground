import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpEventType } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

import { Post } from './post.model';

@Injectable({ providedIn: 'root' })
export class PostsService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {

  }

  createPost(title: string, content: string) {
    const postData: Post = { title, content };
    this.http
      .post<{ key: string }>(
        'https://ng-complete-guide-34e37.firebaseio.com/posts.json',
        postData,
        {
          observe: 'response'
        }
      )
      .subscribe(responseData => {
        console.log(responseData);
      }, error => {
        this.error.next(error.message);
      });
  }

  fetchPosts() {
    let httpParams = new HttpParams();
    httpParams = httpParams.append('prettier', 'true');

    return this.http.get<{ [key: string]: Post }>('https://ng-complete-guide-34e37.firebaseio.com/posts.json',
      {
        headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
        params: httpParams
      })
      .pipe(map(responseData => {
        const postArray: Post[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postArray.push({ ...responseData[key], id: key });
          }
        }
        return postArray;
      }), catchError(
        resError => {
          return throwError(resError);
        }
      ));
  }

  deletePosts() {
    return this.http.delete('https://ng-complete-guide-34e37.firebaseio.com/posts.json', {
      observe: 'events'
    }).pipe(tap(events => {
      console.log(events);
      if (events.type === HttpEventType.Response) {
        console.log(events.body);
      }
    }));
  }

}
