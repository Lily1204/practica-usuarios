import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from "@angular/flex-layout";
import { CommonModule } from "@angular/common";
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { PostPage } from './post.page';

// const routes: Routes = [{
//     path: '',
//     component: PostPage
// }];

const COMMON_IMPORTS = [
    FlexLayoutModule,
    MatIconModule,
    CommonModule,
    MatListModule
];

const COMMON_DECLARATIONS = [PostPage ];

@NgModule({
    imports: [COMMON_IMPORTS],
    declarations: COMMON_DECLARATIONS,
    exports: COMMON_DECLARATIONS
})
export class PostPageModule {}

export default {
    COMMON_IMPORTS, COMMON_DECLARATIONS
};
