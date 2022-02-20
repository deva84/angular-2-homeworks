import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  templateUrl: 'contacts.component.html',
  styleUrls: ['contacts.component.less'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactsComponent {
  title = 'Contact us';
}
