import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  backdropVisible = false;

  constructor(private changeDetectorRef: ChangeDetectorRef) { }


  toggleBackdrop(isVisible: any) {
    console.log('CHANGE', isVisible);
    this.backdropVisible = isVisible;
    this.changeDetectorRef.detectChanges;
  }
}
