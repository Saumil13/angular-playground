import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translatex(0)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translatex(100px)'
      })),
      transition('normal <=> highlighted', animate(300))
    ]),
    trigger('divWild', [
      state('normal', style({
        'background-color': 'red',
        transform: 'translatex(0) scale(1)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translatex(100px) scale(1)'
      })),
      state('shrunken', style({
        'background-color': 'green',
        transform: 'translatex(0) scale(0.5)'
      })),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(800)),
      transition('shrunken <=> *', [
        style({
          'background-color': 'orange'
        }),
        animate(800, style({
          borderRadius: '50px'
        })),
        animate(500)
      ])
    ])
  ]
})
export class AppComponent {
  list = ['Milk', 'Sugar', 'Bread'];
  state = 'highlighted';
  wildState = 'normal';

  onAnimate() {
    this.state === 'normal' ? this.state = 'highlighted' : this.state = 'normal';
    this.wildState === 'normal' ? this.wildState = 'highlighted' : this.wildState = 'normal';
  }

  onShrink() {
    this.wildState = 'shrunken';
  }

  onAdd(item) {
    this.list.push(item);
  }
}
