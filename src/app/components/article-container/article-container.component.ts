import { Component, OnInit } from '@angular/core';

import { StoriesService } from 'src/app/services/stories.service';

@Component({
  selector: 'app-article-container',
  templateUrl: './article-container.component.html',
  styleUrls: ['./article-container.component.scss']
})
export class ArticleContainerComponent implements OnInit {

  stories: any = [];
  

  constructor(private storiesService: StoriesService) { }

  ngOnInit(): void {
    this.storiesService.getStories()
    .subscribe((res: any)=>{
      this.stories = res;
      console.log(this.stories);
    })
  }

}
