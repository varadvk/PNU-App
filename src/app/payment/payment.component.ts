import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaymentService } from '../payment.service';

declare var Razorpay: any;
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit {
  amount = {
    amount: 500,
  };
  constructor(private paymentService: PaymentService) {}

  ngOnInit(): void {}

  makePayment(paymentForm: NgForm) {
    console.log('clicked', this.amount.amount);
    this.paymentService.createOrder(this.amount.amount).subscribe(
      (res: any) => {
        console.log(res.key);
        console.log(res.orderId);
        console.log(res.amount);
        console.log(res.currency);
        this.openPrompt(res.key, res.orderId, res.amount, res.currency);
      },
      (err) => {
        console.log(err);
      }
    );
  }

  openPrompt(key: string, orderId: string, amount:number, currency: string) {
    var options = {
      order_id: orderId,
      key: key,
      amount: amount,
      currency: currency,
      name: 'Acme Corp',
      description:
        'A Wild Sheep Chase is the third novel by Japanese author  Haruki Murakami',
      image: 'https://cdn.pixabay.com/photo/2021/12/02/19/14/elephant-6841179__480.jpg',
      handler: function (response: any) {
        alert(response.razorpay_payment_id);
      },
      prefill: {
        name: 'amin uddin',
        email: 'amidenf9701@gmail.com',
        contact: '7992239847',
      },
      notes: {
        address: 'note value',
      },
      theme: {
        color: '#F37254',
      },
    };
    var rzp1 = new Razorpay(options);
    rzp1.open();
    console.log("works");
  }
}
