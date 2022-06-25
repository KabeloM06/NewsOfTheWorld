import { Component, OnInit } from '@angular/core';
import { StoriesService } from 'src/app/services/stories.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  stories: any = [];

  constructor() { }

  ngOnInit(): void {
    
  }

}
