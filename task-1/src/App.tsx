import PricingCard from "./components/PricingCard";

interface AppPricingCardData {
  id: string;
  plan: string;
  price: string;
  features: string[];
  isFeatured?: boolean;
}

const App: React.FC = () => {
  const pricingPlans: AppPricingCardData[] = [
    {
      id: "standard",
      plan: "Standard",
      price: "$100",
      features: [
        "50,000 Requests",
        "4 contributors",
        "Up to 3 GB storage space",
      ],
    },
    {
      id: "pro",
      plan: "Pro",
      price: "$200",
      features: [
        "100,000 Requests",
        "7 contributors",
        "Up to 6 GB storage space",
      ],
      isFeatured: true,
    },
    {
      id: "expert",
      plan: "Expert",
      price: "$500",
      features: [
        "200,000 Requests",
        "11 contributors",
        "Up to 10 GB storage space",
      ],
    },
  ];

  return (
    <div className="bg-slate-900 min-h-screen p-4 sm:p-8 flex flex-col items-center justify-center font-sans">
      <h1 className="text-4xl sm:text-5xl font-bold text-white mb-10 sm:mb-16 text-center">
        Pricing
      </h1>
      <div className="flex flex-col sm:flex-row sm:space-x-0 md:space-x-6 space-y-6 sm:space-y-0 w-full max-w-5xl">
        {pricingPlans.map((plan) => (
          <div
            key={plan.id}
            className="w-full sm:w-1/3 px-0 sm:px-2 md:px-3 flex"
          >
            {" "}
            <PricingCard
              plan={plan.plan}
              price={plan.price}
              features={plan.features}
              isFeatured={plan.isFeatured}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
