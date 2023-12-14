import { Component, VERSION } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isSidebarApp$ = of(true);

  tabs$ = of([
    {
      id: 'details-tab-link',
      title: 'General Information',
      routerLink: 'details',
      visible: true,
    },
    {
      id: 'requirements-tab-link',
      title: 'Skills',
      routerLink: 'requirements',
      visible: true,
    },
    {
      id: 'tools-tab-link',
      title: 'Tools',
      routerLink: 'tools',
      visible: false,
    },
    {
      id: 'reserved-materials-tab-link',
      title: 'Reserved Materials',
      routerLink: 'reserved-materials',
      visible: true,
    },
    {
      id: 'checklists-tab-link',
      title: 'Smartforms',
      routerLink: 'checklists',
      visible: false,
    },
    {
      id: 'attachments-tab-link',
      title: 'Attachments',
      routerLink: 'attachments',
      visible: true,
    },
    {
      id: 'journal-tab-link',
      title: 'Journal',
      routerLink: 'journal',
      visible: false,
    },
    {
      id: 'history-tab-link',
      title: 'History',
      routerLink: 'history',
      visible: false,
    },
    {
      id: 'outlet-tab-link',
      title: 'title',
      routerLink: 'outlet',
      visible: false,
    },
  ]);
}
