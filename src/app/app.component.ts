import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('appTitle') title: ElementRef<HTMLHeadingElement> | undefined;
  @ViewChild('contacts') contactInfo: ElementRef<HTMLElement> | undefined;

  ngAfterViewInit() {
    if (this.title) this.title.nativeElement.innerText = 'Small Grocery Store';
    if (this.contactInfo)
      this.contactInfo.nativeElement.innerHTML = `2 St John's Str.<br> New Jersey, NJ, US<br> Phone: +1-862-111-1111`;
  }
}
