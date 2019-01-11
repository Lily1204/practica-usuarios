import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    loadChildren: './home/home.routing#HomeRoutingModule'
    },
    {
    path: 'user-list',
    loadChildren: './home/pages/user-list/user-list.module#UserListModule'
    }
];


@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }