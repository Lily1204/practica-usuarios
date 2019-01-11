import { NgModule } from "@angular/core";
import { LandingPage } from "./landing.page";
import { Routes, RouterModule } from '@angular/router';
import { FlexLayoutModule } from "@angular/flex-layout";
import { CommonModule } from "@angular/common";
import { MatIconModule } from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';

const routes: Routes = [{
    path: '',
    component: LandingPage
}];

const COMMON_IMPORTS = [
    FlexLayoutModule,
    MatIconModule,
    CommonModule,
    MatListModule
];

const COMMON_DECLARATIONS = [LandingPage ];

@NgModule({
    imports: [COMMON_IMPORTS, RouterModule.forChild(routes)],
    declarations: COMMON_DECLARATIONS,
    exports: COMMON_DECLARATIONS
})
export class LandingModule {}

export default {
    COMMON_IMPORTS, COMMON_DECLARATIONS
};
