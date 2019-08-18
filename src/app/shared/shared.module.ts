import { NgModule } from '@angular/core';

import { BreadcrumbsComponent } from './breadcrumbs/breadcrumbs.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NofoundComponent } from './nofound/nofound.component';

@NgModule({

    declarations: [
        BreadcrumbsComponent,
        HeaderComponent,
        SidebarComponent,
        NofoundComponent
    ],
    exports: [
        BreadcrumbsComponent,
        HeaderComponent,
        SidebarComponent,
        NofoundComponent
    ]

})

export class SharedModule { }