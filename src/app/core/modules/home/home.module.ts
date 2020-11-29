import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from 'src/app/core/modules/home/home.component';
import { HomeRoutingModule } from 'src/app/core/modules/home/home-routing.module';
import { HeaderComponent } from 'src/app/core/modules/components/header/header.component';
import { MatSelectModule } from '@angular/material/select';
import { FooterComponent } from 'src/app/core/modules/components/footer/footer.component';

@NgModule({
  declarations: [HomeComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule, HomeRoutingModule, MatSelectModule],
  exports: [HomeComponent],
})
export class HomeModule {}
