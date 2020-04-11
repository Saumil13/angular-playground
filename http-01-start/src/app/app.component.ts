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
  error = null;

  constructor(private http: HttpClient, private postsService: PostsService) { }

  ngOnInit() {
    this.onFetchData();
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
    this.postsService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  private onFetchData() {
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(data => {
      this.loadedPosts = data;
      this.isFetching = false;
    }, error => {
      this.error = error.message;
    });
  }
}
