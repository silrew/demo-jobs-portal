import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';
import { RouterModule , Routes} from '@angular/router';
import { SideNavComponent } from 'src/app/overview/side-nav/side-nav.component';
import { OverviewComponent } from './overview.component';
import { OverviewBaseComponent } from 'src/app/overview/overview-base/overview-base.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { JobsComponent } from  '../jobs/jobs/jobs.component'
import { JobDetailComponent } from 'src/app/jobs/job-detail/job-detail.component';

const routes: Routes = [
  
  {path: '', component: OverviewBaseComponent,
  children: [
    {path: '', component: OverviewComponent },
    {path:'overview', component: OverviewComponent },
    {path: 'jobs', component: JobsComponent},
    {path: 'job-detail', component: JobDetailComponent},
   
  ]},
  {path: '**', redirectTo: 'overview'}
];


@NgModule({
  declarations: [SideNavComponent, OverviewComponent, OverviewBaseComponent],
  imports: [
    CommonModule,
    AppMaterialModule,
    SharedModule,
    RouterModule.forChild(routes),
  ]
})
export class OverviewModule { }
