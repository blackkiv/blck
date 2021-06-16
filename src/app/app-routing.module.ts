import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContanctsComponent } from './components/contancts/contancts.component';
import { DownloadComponent } from './components/download/download.component';
import { HomepageComponent } from './components/homepage/homepage.component';

const routes: Routes = [
  { path: '', component: HomepageComponent, pathMatch: 'full'},
  { path: 'contact', component: ContanctsComponent },
  { path: 'download', component: DownloadComponent },

  { path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
