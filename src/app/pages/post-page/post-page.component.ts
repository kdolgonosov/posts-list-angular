import { Component, OnInit } from '@angular/core';
import { IPost } from '../../models/post';
import { PostsService } from '../../services/posts.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css'],
  standalone: true,
  imports: [MatCardModule],
})
export class PostPageComponent implements OnInit {
  post!: IPost;
  constructor(
    private router: Router,
    private postsService: PostsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.postsService.getPostById(id).subscribe({
      next: (post) => (this.post = post),
      error: (e) => this.router.navigate(['posts']),
    });
  }
}
