import { NgModule } from '@angular/core';

import { MatToolbarModule, MatIconModule, MatButtonModule, MatMenuModule } from '@angular/material';

@NgModule({
  imports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ],
  exports: [
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule
  ]
})

export class AppMaterialModule { }
