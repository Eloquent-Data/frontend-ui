import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgCircleProgressModule } from 'ng-circle-progress';

import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatSelectModule} from '@angular/material/select';
import { ResourcesComponent } from 'app/resources/resources.component';
import { TasksComponent } from 'app/tasks/tasks.component';
import { ProjectsComponent } from 'app/projects/projects.component';
import { BlogsComponent } from 'app/blogs/blogs.component';
import { DiscussionComponent } from 'app/discussion/discussion.component';

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
    TasksComponent,
    ProjectsComponent,
    BlogsComponent,
    DiscussionComponent
  ]
})

export class AdminLayoutModule {}
