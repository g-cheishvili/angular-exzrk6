import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {
  BusyIndicatorModule,
  ButtonModule,
  CheckboxModule,
  IconModule,
  MenuModule,
  MessageToastModule,
  PopoverModule,
  OverflowLayoutModule,
  TabsModule,
} from '@fundamental-ngx/core';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BusyIndicatorModule,
    ButtonModule,
    CheckboxModule,
    IconModule,
    MenuModule,
    MessageToastModule,
    PopoverModule,
    TabsModule,
    OverflowLayoutModule,
    RouterModule.forRoot([
        {
          path: 'details',
          component: AppComponent
        },
        {
          path: 'requirements',
          component: AppComponent
        },
        {
          path: 'reserved-materials',
          component: AppComponent
        },
        {
          path: 'checklists',
          component: AppComponent
        },
        {
          path: '*',
          redirectTo: 'details'
        }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
