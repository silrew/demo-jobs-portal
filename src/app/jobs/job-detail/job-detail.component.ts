import { Component, OnInit } from '@angular/core';
import { JobsService } from 'src/app/jobs/service/jobs.service';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit {
jobForm: FormGroup;
  constructor( private service: JobsService, private fb: FormBuilder) { }

  ngOnInit() {
    this.jobForm = this.fb.group({
      name: ['', Validators.required],
      email:['', Validators.required],
      city:['', Validators.required],
      years: ['', Validators.required],
      resume:['', Validators.required]
    })
    console.log(this.jobForm)
  }

}
