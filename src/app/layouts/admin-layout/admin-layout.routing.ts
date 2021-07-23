import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { ResourcesComponent } from 'app/resources/resources.component';
import { TasksComponent } from 'app/tasks/tasks.component';
import { BlogsComponent } from 'app/blogs/blogs.component';
import { ProjectsComponent } from 'app/projects/projects.component';
import { DiscussionComponent } from 'app/discussion/discussion.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'resources', component: ResourcesComponent },
    { path: 'tasks', component: TasksComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'blog', component: BlogsComponent },
    { path: 'discussion', component: DiscussionComponent },
];
