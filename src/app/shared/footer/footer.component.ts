import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
@Input()width: number= 100;
@Input() margin: number = 0;
  constructor() { }

  ngOnInit() {
  }

}
