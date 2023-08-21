import { Component, OnInit } from '@angular/core';
import { IPost } from '../../models/post';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-posts-page',
  templateUrl: './posts-page.component.html',
  styleUrls: ['./posts-page.component.css'],
})
export class PostsPageComponent implements OnInit {
  posts: IPost[] = [];
  displayedColumns: string[] = ['userId', 'id', 'title', 'body'];
  clickedRows = new Set<IPost>();

  constructor(private postsService: PostsService) {}
  ngOnInit(): void {
    this.postsService.getPosts().subscribe((posts) => (this.posts = posts));
  }
}
