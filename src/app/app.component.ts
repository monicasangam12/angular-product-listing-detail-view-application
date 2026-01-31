import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  imports: [HttpClientModule, RouterOutlet],
  providers: [HttpClient],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'angular-product-listing-detail-view-application';
}
