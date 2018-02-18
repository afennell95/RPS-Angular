import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';



import { SignUpComponent } from './signUp/signUp.component';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { SignInComponent } from './signIn/signIn.component';

@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent, 
    WelcomeComponent, 
    SignInComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      { path: 'signUp', component: SignUpComponent },
      { path: 'signIn', component: SignInComponent },
      { path: 'welcome', component: WelcomeComponent} ,
      { path: '', redirectTo: 'welcome', pathMatch: 'full'},
      { path: '**', redirectTo: 'welcome', pathMatch: 'full' }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
