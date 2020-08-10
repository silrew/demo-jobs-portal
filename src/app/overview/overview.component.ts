import { Component, OnInit, HostListener } from '@angular/core';
import { ScreenSizeService } from 'src/app/shared/screen-size.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
 isScreenSmall = false;
 @HostListener('window:resize') onresize() {
  this.isScreenSmall= this.service.isScreenSmall();
}
  constructor(private service: ScreenSizeService, private router: Router) { }
  onClick() {
    this.router.navigate(['/jobs']);
  }

  ngOnInit() {
  }

}
