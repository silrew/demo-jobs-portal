import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/jobs/service/jobs.service';
import { Observable } from 'rxjs'
import { Router } from '@angular/router';
@Component({
  selector: 'app-jobs-listing',
  templateUrl: './jobs-listing.component.html',
  styleUrls: ['./jobs-listing.component.scss']
})
export class JobsListingComponent implements OnInit {
  jobListing$: Observable<any>;
  pageno$: Observable<any>;
  constructor(private service: JobsService, private router: Router) { }

  onNextClick(value) {
    this.service.getNextPage(value);
  }
  onPreviousClick(value){
    this.service.getPreviousPage(value);
  }
  onclickOtherCompanies(){ console.log('other com')
  this.service.searchFilters.next([]);
  this.service.getNextPage(0);
   //this.jobListing$ = this.service.filteredListing();
  }
  onclickCity(value){
    this.service.searchFilters.next([{city:value}]);
    this.service.filteredListing(true);
  }
  onclickIndustry(value){
    this.service.searchFilters.next([{lndustry:value}]);
    this.service.filteredListing(true);
  }
  onclickCompany(value){
    this.service.searchFilters.next([{company:value}]);
    this.service.filteredListing(true);
  }
  initialize(){
    this.jobListing$ = this.service.pageListing;
    this.pageno$ = this.service.pageNo;
  }
  onJobDetailClick(value) {
    this.service.selectedJoblisting.next([value]);
    this.router.navigate(['/job-detail'])
  }
  ngOnInit() {
    this.service.getNextPage(0);
    this.initialize();
  }

}
