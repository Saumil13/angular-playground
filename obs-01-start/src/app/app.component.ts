import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from './user.service';
import { Subscription } from 'rxjs';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  didActivated = false;
  private activatedSub: Subscription;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.activatedSub = this.userService.activatedEmitter.subscribe(didUserActivate => {
      this.didActivated = didUserActivate;
    });
  }

  ngOnDestroy() {
    this.activatedSub.unsubscribe();
  }
}
