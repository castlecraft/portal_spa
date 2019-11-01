import { NgModule } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  imports: [MatCardModule, MatButtonModule],
  exports: [MatCardModule, MatButtonModule],
})
export class MaterialModule {}
