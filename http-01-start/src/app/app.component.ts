import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching = false;

  constructor(private http: HttpClient, private postsService: PostsService) { }

  ngOnInit() {
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(data => {
      this.loadedPosts = data;
      this.isFetching = false;
    });
  }

  onCreatePost(postData: Post) {
    // Send Http request
    this.postsService.createPost(postData.title, postData.content);
  }

  onFetchPosts() {
    // Send Http request
    this.onFetchData();
  }

  onClearPosts() {
    // Send Http request
  }

  private onFetchData() {
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(data => {
      this.loadedPosts = data;
      this.isFetching = false;
    });
  }
}
