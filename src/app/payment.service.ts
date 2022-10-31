import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  constructor(private httpClient: HttpClient) { }

  public createOrder(amount: Number) {
    return this.httpClient.post("http://localhost:9090/createPaymentOrder/" + amount, null);
  }
}
