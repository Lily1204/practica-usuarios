import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from "@angular/flex-layout";
import { CommonModule } from "@angular/common";
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { CommentPage } from './comment.page';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSortModule} from '@angular/material/sort';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

const routes: Routes = [{
    path: ':id',
    component: CommentPage
}];

const COMMON_IMPORTS = [
    FlexLayoutModule,
    MatIconModule,
    CommonModule,
    MatListModule,
    MatCardModule,
    MatTabsModule,
    MatSortModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule
];

const COMMON_DECLARATIONS = [CommentPage ];

@NgModule({
    imports: [COMMON_IMPORTS, RouterModule.forChild(routes)],
    declarations: COMMON_DECLARATIONS,
    exports: COMMON_DECLARATIONS
})
export class CommentPageModule {}

export default {
    COMMON_IMPORTS, COMMON_DECLARATIONS
};
