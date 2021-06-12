import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { TableListComponent } from '../../table-list/table-list.component';
import { TypographyComponent } from '../../typography/typography.component';
import { IconsComponent } from '../../icons/icons.component';
import { MapsComponent } from '../../maps/maps.component';
import { NotificationsComponent } from '../../notifications/notifications.component';
import { UpgradeComponent } from '../../upgrade/upgrade.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'resources', component: UserProfileComponent },
    { path: 'tasks', component: TableListComponent },
    { path: 'projects', component: TypographyComponent },
    { path: 'blog', component: IconsComponent },
    { path: 'discussion', component: NotificationsComponent },
    { path: 'logout', component: UpgradeComponent },
];
