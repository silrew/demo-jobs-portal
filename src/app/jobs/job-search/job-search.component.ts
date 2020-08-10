import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/jobs/service/jobs.service';
import { Observable, of } from 'rxjs';
import { tap, map, filter, find, debounceTime, distinctUntilChanged  } from 'rxjs/Operators';
import { Subscription } from 'rxjs'

@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.scss']
})
export class JobSearchComponent implements OnInit {

  subscription: Subscription = new Subscription();
  showDropdownList = false;
  showCityDropdown = false;
  showIndustryDropdown = false;
  city$: Observable<any>;
  jobRole$: Observable<any>;
  company$: Observable<any>;
  industry$: Observable<any>;
  jobslist$: Observable<any>;
  filterCompanyStr ="Filter by Company";
  filterCityStr = "Filter by City";
  filterIndustryStr = "Filter by Industry";
  filterCriterias: any[] = [];

  constructor(private service: JobsService) { }
  addSearchCriteria(key, value){
    if(this.filterCriterias.length ===1){
      let eObj = this.filterCriterias[0];
      eObj[key] = value;
    } else {
    let obj ={};
    obj[key] =value;
    this.filterCriterias.push(obj)
    }
  }
  onInputChange(value) {
    let input$ =of(value).pipe(
      debounceTime(800)
    )
    this.subscription.add(input$.subscribe(value => {
      this.filterCriterias.push({'singleCriteria': value})
    }

    ))
  }
  onSearchClick(){console.log(this.filterCriterias,'nn')
    this.service.searchFilters.next(this.filterCriterias);this.service.filteredListing(true);
    this.filterCriterias = []
  }
  ngOnInit() {
    let jlist;
    this.jobslist$ = this.service.jobsListingList;

    this.industry$ = this.jobslist$.pipe(
      map(jobslist => jobslist.map(jobs => jobs['lndustry'])),
      map(industry => industry.filter((industry, idx, self) => idx === self.indexOf(industry))),
      map(data => data.sort())
    )

    this.city$ = this.jobslist$.pipe(
      map(jobslist => jobslist.map(jobs => jobs['city'])),
      map(industry => industry.filter((industry, idx, self) => idx === self.indexOf(industry))),
      map(data => data.sort())
    )

    this.company$ = this.jobslist$.pipe(
      map(jobslist => jobslist.map(jobs => jobs['company'])),
      map(industry => industry.filter((industry, idx, self) => idx === self.indexOf(industry))),
      map(data => data.sort())
    )

    this.jobslist$ = this.jobslist$.pipe(
      map(jobslist => jobslist.map(jobs => jobs['role'])),
      map(industry => industry.filter((industry, idx, self) => idx === self.indexOf(industry)))
    )
  }
ngOnDestroy(){
  this.subscription.unsubscribe()
}
}

