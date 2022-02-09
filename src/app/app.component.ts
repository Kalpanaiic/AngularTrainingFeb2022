import { Component } from '@angular/core';

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
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'priceCard';
  priceCard: Array<PriceCard> = [
    { 
      Type: "FREE",
      Price: 0,
      User: "Single User",
      Storage: "5GB Storage",
      PublicAccess: "Unlimited Public Projects",
      Community: "Community Access",
      PrivateAccess: "Unlimited Private Projects",
      Support: "Dedicated Phone Support",
      Domain: "Free Subdomain",
      Report: "Monthly Status Reports"
    },
    {
      Type: "PLUS",
      Price: 9,
      User: "5 Users",
      Storage: "50GB Storage",
      PublicAccess: "Unlimited Public Projects",
      Community: "Community Access",
      PrivateAccess: "Unlimited Private Projects",
      Support: "Dedicated Phone Support",
      Domain: "Free Subdomain",
      Report: "Monthly Status Reports"
    },
    {
      Type:"PRO",
      Price: 49,
      User: "Unlimited Users",
      Storage: "150GB Storage",
      PublicAccess: "Unlimited Public Projects",
      Community: "Community Access",
      PrivateAccess: "Unlimited Private Projects",
      Support: "Dedicated Phone Support",
      Domain: "Unlimited Free Subdomain",
      Report: "Monthly Status Reports"
    }
  ]
}
