import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AuthenPage } from './authen';

@NgModule({
  declarations: [
    AuthenPage,
  ],
  imports: [
    IonicPageModule.forChild(AuthenPage),
  ],
})
export class AuthenPageModule {}
