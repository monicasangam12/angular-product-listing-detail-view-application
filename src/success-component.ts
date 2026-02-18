import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { environment } from "../../environments/environment";

@Component({
  selector: 'app-success',
  template: ``
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
    // Call your backend endpoint to retrieve session details
    this.http.get<any>(`${environment.backendUrl}/order/success?session_id=${sessionId}`)
      .subscribe(details => {
        this.paymentDetails = details;
        // Logic to "print a receipt" or display order info
      });
  }
}