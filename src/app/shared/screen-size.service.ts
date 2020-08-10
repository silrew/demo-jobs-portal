import { Injectable } from '@angular/core';
const SMALL_WIDTH_BREAKPOINT = 720;
@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {
  private mediaMatcher: MediaQueryList =
  matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);

  constructor(
          ) {
    // this.mediaMatcher.addListener(mql =>
    //   zone.run(() => matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`)));
  }
 isScreenSmall(): boolean {
    return this.mediaMatcher.matches;
  }
}
