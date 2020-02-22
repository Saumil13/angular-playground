import { Component, OnInit } from '@angular/core';

@Component({
  // selector: '[app-servers]',
  // selector: '.app-servers',
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewerver = false;
  serverCreationStatus = 'No server was created';

  constructor() {
    setTimeout(() => { this.allowNewerver = true; }, 2000);
  }

  ngOnInit() {
  }

  onServerCreated() {
    this.serverCreationStatus = 'Server was created';
  }



}
