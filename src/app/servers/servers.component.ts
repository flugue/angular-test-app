import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server was created';
  serverName = '';
  isServerCreated = false;
  servers = ['US', 'PH']

  constructor() { 
    setTimeout(()=>this.allowNewServer = true, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.isServerCreated = true;
    this.servers = [...this.servers, this.serverName];
    this.serverCreationStatus = this.serverName +' Server was created! ';
  }
}
