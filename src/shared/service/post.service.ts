import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Post } from '../model/post.model';
import { Observable } from 'rxjs';
import { existingPost } from '../model/existingPost.model';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  backUrl:string = "http://localhost:8080/post/";

  constructor(private http: HttpClient) { }

  public getPost(): Observable<Post[]> {
    return this.http.get<Post[]>(this.backUrl + 'getPost');
  }

  public getOnePost(id: number): Observable<Post> {
    return this.http.get<Post>(this.backUrl + 'getOnePost/' + id);
  }

  public createPost(post: FormData): Observable<Post> {
    return this.http.post<Post>(this.backUrl + 'createPost', post);
  }

  public deletePost(id: number) {
    return this.http.delete(this.backUrl + 'deletePost/' + id);
  }

  public modifyPost(post: FormData, id: number):Observable<existingPost> {
    return this.http.put<existingPost>(this.backUrl + 'modifyPost/' + id, post);
  }


}
