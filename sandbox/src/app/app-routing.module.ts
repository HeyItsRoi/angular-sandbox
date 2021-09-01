import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GalleryComponent } from './components/gallery/gallery.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const routes: Routes = [
	{ path: '',          component: LandingPageComponent},
	{ path: 'about',     component: LandingPageComponent},
	{ path: 'skills',    component: LandingPageComponent},
	{ path: 'portfolio', component: GalleryComponent},
	{ path: 'contact',   component: LandingPageComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule { }
