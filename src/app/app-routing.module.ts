import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentComponent } from './components/content/content.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'content', component: ContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }