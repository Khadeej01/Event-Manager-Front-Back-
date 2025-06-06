import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'; // Add this import
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [
    CommonModule, // Add this to imports
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule
  ],
  exports: [NavbarComponent, FooterComponent]
})
export class SharedModule {}
