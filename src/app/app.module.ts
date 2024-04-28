import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { NotesComponent } from './pages/notes/notes.component';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from '@angular/common/http'
import { MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DialogComponent } from './components/dialog/dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  ConfirmBoxConfigModule,
  DialogConfigModule,
  NgxAwesomePopupModule,
  ToastNotificationConfigModule,
} from '@costlydeveloper/ngx-awesome-popup';
import { FilterPipe } from './core/pipes/filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    SignupComponent,
    NotesComponent,
    SideNavComponent,
    DialogComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDialogModule,
    NgxAwesomePopupModule.forRoot({
      colorList: {
        success: '#3caea3', // optional
        info: '#2f8ee5', // optional
        warning: '#ffc107', // optional
        danger: '#e46464', // optional
        customOne: '#3ebb1a', // optional
        customTwo: '#bd47fa', // optional (up to custom five)
      },
    }),
    ConfirmBoxConfigModule.forRoot(),

    DialogConfigModule.forRoot(), // optional
    ToastNotificationConfigModule.forRoot(), // optional
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
