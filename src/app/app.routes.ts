import { Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { ServicesComponent } from './services/services.component';
import { DesignersComponent } from './designers/designers.component';
import { PackagesComponent } from './packages/packages.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { TeamComponent } from './team/team.component';

export const routes: Routes = [
    {'path': '', redirectTo: '/showcase', pathMatch: 'full'},
    {'path': 'showcase', component:ContentComponent},
    {'path': 'services', component:ServicesComponent},
    {'path': 'designers', component:DesignersComponent},
    {'path': 'team', component:TeamComponent},
    {'path': 'packages', component:PackagesComponent},
    {'path': 'contact', component:ContactComponent},
    {'path': 'footer', component:FooterComponent},
];
