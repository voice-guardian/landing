import React, { useState } from 'react';

const Pricing: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  
  const plans = [
    {
      id: 'software',
      name: 'Software',
      description: 'DIY solution to monitor and collect on your music',
      price: 'X',
      period: '/month',
      ctaText: 'Get Started',
      features: [
        'Monitor for recordings and compositions',
        'Generate claim reports',
        'Automate evidence collection',
        'Automate brand notices',
        'Receive licensing payments'
      ],
      isPopular: false,
      bgColor: 'bg-[#f1f1ff]',
      hoverBgImage: "url('/images/background2.png')",
      textColor: 'text-gray-800',
      buttonClass: 'bg-[#404154] text-white hover:bg-[#2d2e3d]'
    },
    {
      id: 'managed',
      name: 'Managed',
      description: 'Complete hands-off solution for serious publishers',
      price: 'Custom',
      period: '',
      ctaText: 'Contact Us',
      features: [
        'Everything in the Software Tier',
        'Done-For-You Revenue Recovery',
        'Outcome-Based Business Model',
        'Priority Legal Services',
        'Priority Support'
      ],
      isPopular: true,
      bgColor: 'bg-[#404154]',
      hoverBgImage: "url('/images/background3.png')",
      textColor: 'text-white',
      buttonClass: 'bg-white text-[#404154] hover:bg-gray-100'
    }
  ];

  return (
    <section className="w-full py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Headline */}
        <div className="text-center mb-12">
          <p className="text-purple-600 text-sm font-semibold tracking-widest uppercase mb-4">
            PRICING
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Choose Your Plan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select the plan that best fits your needs. Whether you prefer to manage yourself or want us to handle everything.
          </p>
        </div>
        
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div 
              key={plan.id}
              className={`rounded-xl overflow-hidden transition-all duration-500 hover:shadow-xl relative ${plan.bgColor} ${plan.textColor}`}
              onMouseEnter={() => setHoveredCard(plan.id)}
              onMouseLeave={() => setHoveredCard(null)}
              style={{
                backgroundImage: hoveredCard === plan.id ? plan.hoverBgImage : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              {/* Popular Badge */}
              {plan.isPopular && (
                <div className="absolute top-6 right-6">
                  <span className="bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    RECOMMENDED
                  </span>
                </div>
              )}
              
              {/* Content */}
              <div className="p-8 md:p-10 relative z-10">
                <h3 className={`text-2xl font-bold mb-2 transition-colors duration-300 ${hoveredCard === plan.id ? 'text-white' : ''}`}>
                  {plan.name}
                </h3>
                <p className={`mb-6 opacity-80 transition-colors duration-300 ${hoveredCard === plan.id ? 'text-white' : ''}`}>
                  {plan.description}
                </p>
                
                <div className="mb-8">
                  <span className={`text-4xl font-bold transition-colors duration-300 ${hoveredCard === plan.id ? 'text-white' : ''}`}>
                    {plan.price === 'Custom' ? '' : '$'}{plan.price}
                  </span>
                  <span className={`text-lg ml-1 transition-colors duration-300 ${hoveredCard === plan.id ? 'text-white' : ''}`}>
                    {plan.period}
                  </span>
                </div>
                
                <ul className="mb-8 space-y-4">
                  {plan.features.map((feature, index) => (
                    <li 
                      key={index} 
                      className={`flex items-start transition-colors duration-300 ${hoveredCard === plan.id ? 'text-white' : ''}`}
                    >
                      <svg 
                        className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0 text-purple-600" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          strokeWidth={2} 
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                {/* CTA Button */}
                <div className={`transition-opacity duration-300 ${hoveredCard === plan.id ? 'opacity-100' : ''}`}>
                  <button 
                    className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                      hoveredCard === plan.id 
                        ? 'bg-white text-[#404154]' 
                        : plan.buttonClass
                    }`}
                  >
                    <span className="flex items-center justify-center">
                      {plan.ctaText}
                      <svg 
                        className="ml-2 w-4 h-4 transform -rotate-45 group-hover:-translate-y-1 group-hover:translate-x-1" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Additional Info */}
        <div className="text-center mt-12 text-gray-600">
          <p>Need a custom solution? <a href="#" className="text-purple-600 font-medium hover:underline">Contact our sales team</a> for a personalized quote.</p>
        </div>
      </div>
    </section>
  );
};

export default Pricing; 