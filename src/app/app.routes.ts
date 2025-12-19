import { Routes } from '@angular/router';
import { ProfilesComponent } from './pages/profiles/profiles.component';
import { ChatsComponent } from './pages/chats/chats.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { IntroComponent } from './pages/intro/intro.component';

export const routes: Routes = [
    { path: "", component: IntroComponent },
    { path: "profiles", component: ProfilesComponent },
    { path: "chats", component: ChatsComponent },
    { path: "profile", component: ProfileComponent },
    { path: "**", component: IntroComponent },
];
