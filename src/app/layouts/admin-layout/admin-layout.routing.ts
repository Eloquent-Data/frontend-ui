import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { ResourcesComponent } from 'app/pages/resources/resources.component';
import { BlogsComponent } from 'app/pages/blogs/blogs.component';
import { ProjectsComponent } from 'app/pages/projects/projects.component';
import { DiscussionComponent } from 'app/pages/discussion/discussion.component';
import { UserComponent } from 'app/pages/user/user.component';
import { EditUserComponent } from 'app/pages/user/edit-user/edit-user.component';
import { ChallengesComponent } from 'app/pages/challenges/challenges.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'resources', component: ResourcesComponent },
    { path: 'challenges', component: ChallengesComponent },
    { path: 'projects', component: ProjectsComponent },
    { path: 'blog', component: BlogsComponent },
    { path: 'discussion', component: DiscussionComponent },
    // userprofile and edit
    { path: 'me', component: UserComponent },
    { path: 'me/edit', component: EditUserComponent },
];
