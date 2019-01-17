import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from "@angular/flex-layout";
import { CommonModule } from "@angular/common";
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { PostPage } from './post.page';
import {MatCardModule} from '@angular/material/card';
import {ScrollDispatchModule} from '@angular/cdk/scrolling';

const routes: Routes = [{
    path: ':id',
    component: PostPage
}];

const COMMON_IMPORTS = [
    FlexLayoutModule,
    MatIconModule,
    CommonModule,
    MatListModule,
    MatCardModule,
    ScrollDispatchModule
];

const COMMON_DECLARATIONS = [PostPage ];

@NgModule({
    imports: [COMMON_IMPORTS,  RouterModule.forChild(routes)],
    declarations: COMMON_DECLARATIONS,
    exports: COMMON_DECLARATIONS
})
export class PostPageModule {}

export default {
    COMMON_IMPORTS, COMMON_DECLARATIONS
};
