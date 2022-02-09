import { Component, Input, OnInit } from '@angular/core';
interface PriceCard {
  Type: string,
  Price: Number,
  User: String,
  Storage: String,
  PublicAccess: String,
  Community: String,
  PrivateAccess: String,
  Support: String,
  Domain: String,
  Report: String
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  @Input() priceCardData: PriceCard = {
    Type: '',
  Price: 0,
  User: '',
  Storage: '',
  PublicAccess: '',
  Community: '',
  PrivateAccess: '',
  Support: '',
  Domain: '',
  Report: ''
  }

  constructor() { }

  ngOnInit(): void {
  }

}
