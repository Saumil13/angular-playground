import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.onFetchData();
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.http
      .post<{ key: string }>(
        'https://ng-complete-guide-34e37.firebaseio.com/posts.json',
        postData
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }

  onFetchPosts() {
    // Send Http request
    this.onFetchData();
  }

  onClearPosts() {
    // Send Http request
  }

  private onFetchData() {
    this.http.get<{ [key: string]: Post }>('https://ng-complete-guide-34e37.firebaseio.com/posts.json')
      .pipe(map(responseData => {
        const postArray: Post[] = [];
        for (const key in responseData) {
          if (responseData.hasOwnProperty(key)) {
            postArray.push({ ...responseData[key], id: key });
          }
        }
        return postArray;
      }))
      .subscribe(data => {
        this.loadedPosts = data;
      });
  }
}
