import { Component, OnInit , HostListener, ChangeDetectorRef, ViewChild} from '@angular/core';
import { ScreenSizeService } from 'src/app/shared/screen-size.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
showLogoSm = false;
isScreenSmall: boolean;

@ViewChild(MatDrawer, {static: true}) drawer: MatDrawer;
@HostListener('window:resize') onresize() {
  this.isScreenSmall= this.service.isScreenSmall();
}
  constructor(private service: ScreenSizeService,
            private router: Router) { } 

  ngOnInit(): void {
    this.isScreenSmall = this.service.isScreenSmall(); 
    
    this.router.events.subscribe(data => {
      if (this.isScreenSmall) {
      this.showLogoSm = true;
        this.drawer.close();
        console.log(this.isScreenSmall, this.showLogoSm,'dfd')
      }
    })
    this.router.navigate(['/overview'])
    
  }
  }