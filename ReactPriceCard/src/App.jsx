import React from 'react';
import './App.css'; // Assuming you have some CSS styling

const pricingPlans = [
  {
    title: "FREE",
    price: "$0",
    period: "month",
    features: [
      { text: "Single User", available: true },
      { text: "50GB Storage", available: true },
      { text: "Unlimited Public Projects", available: true },
      { text: "Community Access", available: true },
      { text: "Unlimited Private Projects", available: false },
      { text: "Dedicated Phone Support", available: false },
      { text: "Free Subdomain", available: false },
      { text: "Monthly Status Reports", available: false },
    ],
  },
  {
    title: "PLUS",
    price: "$9",
    period: "month",
    features: [
      { text: "5 Users", available: true },
      { text: "50GB Storage", available: true },
      { text: "Unlimited Public Projects", available: true },
      { text: "Community Access", available: true },
      { text: "Unlimited Private Projects", available: true },
      { text: "Dedicated Phone Support", available: true },
      { text: "Free Subdomain", available: true },
      { text: "Monthly Status Reports", available: false },
    ],
  },
  {
    title: "PRO",
    price: "$49",
    period: "month",
    features: [
      { text: "Unlimited Users", available: true },
      { text: "50GB Storage", available: true },
      { text: "Unlimited Public Projects", available: true },
      { text: "Community Access", available: true },
      { text: "Unlimited Private Projects", available: true },
      { text: "Dedicated Phone Support", available: true },
      { text: "Free Subdomain", available: true },
      { text: "Monthly Status Reports", available: true },
    ],
  },
];

const PricingCard = ({ title, price, period, features }) => (
  <div className="card">
    <h3>{title}</h3>
    <h2>{price}/{period}</h2>
    <ul>
      {features.map((feature, index) => (
        <li key={index} className={feature.available ? "available" : "unavailable"}>
          {feature.available ? "✔️" : "❌"} {feature.text}
        </li>
      ))}
    </ul>
    <button>BUTTON</button>
  </div>
);

const App = () => (
  <div className="pricing">
    {pricingPlans.map((plan, index) => (
      <PricingCard
        key={index}
        title={plan.title}
        price={plan.price}
        period={plan.period}
        features={plan.features}
      />
    ))}
  </div>
);

export default App;
