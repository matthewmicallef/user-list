import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersStateModule } from './state/user';
import { HomeContainer } from './pages/home/home.container';
import { UsersContainer } from './pages/users/users.container';
import { UserCardComponent } from './components/user-card/user-card.component';
import { UserDetailContainer } from './pages/user-detail/user-detail.container';

/**
 * Note: With such a small application lazy loading of modules may be an overkill,
 * but with larger ones it would have been a must
 * */

@NgModule({
  declarations: [
    AppComponent,
    HomeContainer,

    UsersContainer,
    UserDetailContainer,
    UserCardComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
    }),
    UsersStateModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
