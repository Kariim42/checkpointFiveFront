import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreationComponent } from './creation/creation.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ModifyComponent } from './modify/modify.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent,
  },
  {
    path: 'posts',
    component: PostsComponent,
  },
  {
    path: 'creation',
    component: CreationComponent,
  },
  {
    path: 'modify/:id',
    component: ModifyComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
