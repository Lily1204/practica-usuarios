import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { reducers } from './shared/store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './shared/store/effects';
import { UserService } from './shared/services/user.service';
import { AppRoutingModule } from './app.routing';
import { HomeRoutingModule } from './home/home.routing';
import { MatIconModule } from '@angular/material/icon';
import { NavbarModule } from './shared/components/navbar/navbar.module';
import { FooterModule } from './shared/components/footer/footer.module';
import { CommentService } from './shared/services/comment.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NavbarModule,
    FooterModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    HomeRoutingModule,
    MatIconModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
  ],
  providers: [UserService, CommentService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
