import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { existingPost } from 'src/shared/model/existingPost.model';
import { Post } from 'src/shared/model/post.model';
import { PostService } from 'src/shared/service/post.service';

@Component({
  selector: 'app-modify',
  templateUrl: './modify.component.html',
  styleUrls: ['./modify.component.css']
})
export class ModifyComponent implements OnInit{
  createPostForm: FormGroup;
  existingPost: existingPost | undefined;
  post: Post | undefined;
  postId!: number;

  constructor(private postService : PostService,
    private fb: FormBuilder,private route: Router,
    private activatedRoute: ActivatedRoute) {
      this.createPostForm = this.fb.group({
        postTitle: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
        postDescription: ['', [Validators.required, Validators.minLength(15), Validators.maxLength(4000)]],
      });
     }

     ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      this.postService.getOnePost(params.id).subscribe((response: Post)=>{
        this.post = response;
        this.postId = params.id;  
        console.log(response);

    this.createPostForm = this.fb.group({
      postTitle: [response.title, [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
      postDescription: [response.description, [Validators.required, Validators.minLength(15), Validators.maxLength(4000)]],
    });
      })
    })

  }
  onSubmit(){
    const formData: FormData = new FormData();
    formData.append('title', this.createPostForm.controls['postTitle'].value);
    formData.append('description', this.createPostForm.controls['postDescription'].value);
    
    this.postService.modifyPost(formData, this.postId).subscribe((response : existingPost)=>{
      this.existingPost = response;
      console.log(response);
    })
  }

}
