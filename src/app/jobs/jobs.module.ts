import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobSearchComponent } from './job-search/job-search.component';
import { JobsComponent } from './jobs/jobs.component';
import { JobsListingComponent } from './jobs-listing/jobs-listing.component';
import { RouterModule, Route } from '@angular/router';
import { AppMaterialModule } from 'src/app/app-material/app-material.module';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Route[]= [
  {path: 'jobs', component: JobsComponent},
  {path: 'job-detail', component: JobDetailComponent}
]

@NgModule({
  declarations: [JobSearchComponent, JobsComponent, JobsListingComponent, JobDetailComponent,
    ],
  imports: [
    CommonModule,
    AppMaterialModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  exports:[JobsComponent]
})
export class JobsModule { }
