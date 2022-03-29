import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from 'src/shared/model/post.model';
import { PostService } from 'src/shared/service/post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  post : Post[] | undefined;
  openParams: boolean;


  constructor(private postService : PostService, private router: Router) {
    this.post = [];
    this.postService.getPost().subscribe((response: Post[]) => {
      this.post = response;
    });
    this.openParams = false;
  }

  ngOnInit(): void {

  }

  params(){
    this.openParams = !this.openParams
  }

  deleteCategory(id: number) {
    this.postService.deletePost(id).subscribe(
      (response: any) => {
      },
      (error: any) => {
      }
    );
  }

  modifyPost(id: number){
    this.router.navigateByUrl('/modify/' + id);
  }
}
