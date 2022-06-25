import { Component, OnInit } from '@angular/core';
import { StoriesService } from 'src/app/services/stories.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

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
