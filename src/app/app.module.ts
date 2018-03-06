import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // this is needed for TagInputModule

import { TagInputModule } from 'ngx-chips';

import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';

import { RequestService } from './RequestService/requests';
import { AppComponent } from './app.component';
import {
  PageComponent,
  EditComponent,
  RevisionsComponent,
  AdminComponent,
  AdminCreateComponent,
  DashboardComponent,
  SearchComponent,
  DepartmentsComponent
} from './routes/routes';
import {
  ProfileSmComponent,
  NavBarComponent,
  UserBubbleComponent,
  SubNavBarComponent,
  MobileNavComponent,
  UnescapePipe,
  BypassSecurityPipe,
  PagesScrollCardsComponent,
  SearchScrollCardsComponent,
  PageResultsComponent,
  PageCardComponent,
  FieldResultsComponent
} from './shared/shared';



@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    EditComponent,
    RevisionsComponent,
    ProfileSmComponent,
    NavBarComponent,
    UserBubbleComponent,
    SubNavBarComponent,
    MobileNavComponent,
    UnescapePipe,
    BypassSecurityPipe,
    DashboardComponent,
    PagesScrollCardsComponent,
    SearchScrollCardsComponent,
    PageCardComponent,
    AdminComponent,
    AdminCreateComponent,
    SearchComponent,
    PageResultsComponent,
    DepartmentsComponent,
    FieldResultsComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    TagInputModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    FroalaViewModule.forRoot(),
    FroalaEditorModule.forRoot(),
    NgbModule.forRoot(),
    RouterModule.forRoot([
      {
        // MUST BE FIRST
        'path': 'admin',
        component: AdminComponent
      }, {
        'path': 'admin/edit/:pageURL',
        component: EditComponent
      }, {
        'path': 'admin/create',
        component: AdminCreateComponent
      }, {
        'path': 'admin/edit/:pageURL/revisions',
        component: RevisionsComponent
      }, {
        "path": 'search',
        component: SearchComponent
      }, {
        "path": 'search:queryComponent',
        component: SearchComponent
      }, {
        "path": 'departments',
        component: DepartmentsComponent
      }, {
        // MUST BE LAST
        'path': ':pageURL',
        component: PageComponent
      }, {
        "path": '',
        component: DashboardComponent
      }
    ])

  ],
  providers: [
    RequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
