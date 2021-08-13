import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgCircleProgressModule } from 'ng-circle-progress';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { ResourcesComponent } from 'app/pages/resources/resources.component';
import { ProjectsComponent } from 'app/pages/projects/projects.component';
import { BlogsComponent } from 'app/pages/blogs/blogs.component';
import { DiscussionComponent } from 'app/pages/discussion/discussion.component';
import { UserComponent } from 'app/pages/user/user.component';
import { EditUserComponent } from 'app/pages/user/edit-user/edit-user.component';
import { ChallengesComponent } from 'app/pages/challenges/challenges.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    NgCircleProgressModule.forRoot({
      "unitsFontSize": "25",
      "titleFontSize": "30",
      "outerStrokeWidth": 29,
      "innerStrokeWidth": 12,
      "showSubtitle": false,
      "showInnerStroke": false,
      "responsive": true
    })
  ],
  declarations: [
    DashboardComponent,
    ResourcesComponent,
    ChallengesComponent,
    ProjectsComponent,
    BlogsComponent,
    DiscussionComponent,
    UserComponent,
    EditUserComponent
  ]
})

export class AdminLayoutModule {}
