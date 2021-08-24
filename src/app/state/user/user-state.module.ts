import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { UsersEffects } from './user.effects';
import { usersFeatureKey, UsersReducer} from './user.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature(usersFeatureKey, UsersReducer),
    EffectsModule.forFeature([UsersEffects])
  ],
  declarations: []
})
export class UsersStateModule {}