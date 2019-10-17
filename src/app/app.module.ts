import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppareilService } from './services/appareil.service';
import { UserService } from './services/user.service';
import { AuthService } from './services/auth.service';
import { AuthComponent } from './auth/auth.component';
import { AppareilViewComponent } from './appareil-view/appareil-view.component';
import { Routes, RouterModule } from '@angular/router';
import { SingleAppareilComponent } from './single-appareil/single-appareil.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { AuthGuard } from './services/auth-guard.service';
import { EditAppareilComponentComponent } from './edit-appareil-component/edit-appareil-component.component';
import { UserListComponent } from './user-list/user-list.component';
import { NewUserComponent } from './new-user/new-user.component';
import { HttpClientModule } from '@angular/common/http';
import { FirstDirective } from './first.directive';
import { ExponentialStrengthPipe } from './exponential-Strength.pipe';
const appRoutes: Routes = [
  // { path: 'appareils', canActivate: [AuthGuard], component: AppareilViewComponent },
  // { path: 'appareils/:id', canActivate: [AuthGuard], component: SingleAppareilComponent },
  // { path: 'edit', canActivate: [AuthGuard], component: EditAppareilComponentComponent },
  // { path: 'users', component: UserListComponent },
  // { path: 'new-user', component: NewUserComponent },
  // { path: 'auth', component: AuthComponent },
  // { path: '', component: AppareilViewComponent },
  // { path: 'not-found', component: FourOhFourComponent },
  // { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    AuthComponent,
    AppareilViewComponent,
    SingleAppareilComponent,
    FourOhFourComponent,
    EditAppareilComponentComponent,
    UserListComponent,
    NewUserComponent,
    FirstDirective,
    ExponentialStrengthPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AppareilService,
    AuthService,
    AuthGuard,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
