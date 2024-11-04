import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MymoduleRoutingModule } from './mymodule-routing.module';
import { MycomponentComponent } from './mycomponent/mycomponent.component';


@NgModule({
  declarations: [
    MycomponentComponent
  ],
  imports: [
    CommonModule,
    MymoduleRoutingModule
  ]
})
export class MymoduleModule { }
