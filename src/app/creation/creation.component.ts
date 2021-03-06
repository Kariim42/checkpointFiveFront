import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/shared/service/post.service';

@Component({
  selector: 'app-creation',
  templateUrl: './creation.component.html',
  styleUrls: ['./creation.component.css']
})
export class CreationComponent{
  createPostForm: FormGroup;

  constructor(private postService : PostService,
              private fb: FormBuilder,private route :Router) {
                this.createPostForm = this.fb.group({
                  postTitle: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]],
                  postDescription: ['', [Validators.required, Validators.minLength(15), Validators.maxLength(4000)]],
                });
               }

  
//Retrieve values of input and create POST
onSubmit(){
  const formData: FormData = new FormData();
  formData.append('title', this.createPostForm.controls['postTitle'].value);
  formData.append('description', this.createPostForm.controls['postDescription'].value);
  
  this.postService.createPost(formData).subscribe((response:any) =>{
  })
  this.route.navigateByUrl('/posts');
}
}
