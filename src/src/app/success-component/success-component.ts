import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-success',
  imports: [CommonModule],
  templateUrl: './success-component.html',
  styleUrl: './success-component.scss'
})
export class SuccessComponent implements OnInit {
  paymentDetails: any;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const sessionId = params['session_id'];
      if (sessionId) {
        this.fetchPaymentDetails(sessionId);
      }
    });
  }

  fetchPaymentDetails(sessionId: string): void {
    this.http.get<any>(`${environment.backendUrl}/order/success?session_id=${sessionId}`)
      .subscribe(details => {
        this.paymentDetails = details;
      });
  }
}
