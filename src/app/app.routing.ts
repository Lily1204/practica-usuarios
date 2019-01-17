import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {} from './home/pages/comment-page/comment.module'
const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    loadChildren: './home/home.routing#HomeRoutingModule'
}, {
    path: 'post-page',
    loadChildren: './home/pages/post-page/post.module#PostPageModule'
}, {
    path: 'post-page',
    loadChildren: './home/pages/post-page/post.module#PostPageModule'
},
{
    path: 'comment-page',
    loadChildren: './home/pages/comment-page/comment.module#CommentPageModule'
}];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule {}