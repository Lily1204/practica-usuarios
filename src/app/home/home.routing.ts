import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import {}  from './pages/comment-page/comment.module'
const routes: Routes = [{
    path: '',
    loadChildren: './pages/landing/landing.module#LandingModule'
}, {
    path: '',
    loadChildren: './pages/post-page/post.module#PostPageModule'
},
{
    path: '',
    loadChildren: './pages/comment-page/comment.module#CommentPageModule'
}];

@NgModule({
    imports: [RouterModule.forChild(routes)]
})
export class HomeRoutingModule {}