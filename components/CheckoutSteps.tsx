import React from 'react';

const CheckoutSteps = ({ current = 0 }) => {
  const steps = [
    { label: 'User Login', description: 'Vitae sed mi luctus laoreet.' },
    { label: 'Shipping Address', description: 'Cursus semper viverra.' },
    { label: 'Payment Method', description: 'Penatibus eu quis ante.' },
    { label: 'Place Order', description: 'Aenean iaculis convallis.' },
  ];

  return (
    <div className="lg:border-t lg:border-b lg:border-gray-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Progress">
        <ol role="list" className="overflow-hidden rounded-md lg:flex lg:rounded-none lg:border-l lg:border-r lg:border-gray-200">
          {steps.map((step, index) => (
            <li key={index} className={`relative overflow-hidden lg:flex-1 ${index > 0 ? 'lg:pl-9' : ''}`}>
              <div className={`border border-gray-200 overflow-hidden ${index === current ? 'lg:border-0' : 'rounded-t-md lg:border-t-0'} ${index === steps.length - 1 ? 'rounded-b-md lg:border-b-0' : ''}`}>
                <a href="#" className="group">
                  <span className={`absolute top-0 left-0 h-full w-1 bg-transparent group-hover:${index === current ? 'bg-indigo-600' : 'bg-gray-200'} lg:bottom-0 lg:top-auto lg:h-1 lg:w-full`} aria-hidden="true"></span>
                  <span className={`px-6 py-5 flex items-start text-sm font-medium ${index > 0 ? 'lg:pl-9' : ''}`}>
                    <span className="flex-shrink-0">
                      <span className={`flex h-10 w-10 items-center justify-center rounded-full ${index === current ? 'bg-indigo-600' : 'border-2 border-gray-300'}`}>
                        {index === current ? (
                          <span className={`text-white ${index > 0 ? 'text-indigo-600' : 'text-gray-500'}`}>{index + 1}</span>
                        ) : (
                          <span className={`text-${index > 0 ? 'indigo-600' : 'gray-500'}`}>{index + 1}</span>
                        )}
                      </span>
                    </span>
                    <span className="mt-0.5 ml-4 flex min-w-0 flex-col">
                      <span className={`text-sm font-medium ${index > 0 ? 'text-indigo-600' : 'text-gray-500'}`}>{step.label}</span>
                      <span className={`text-sm font-medium text-gray-500`}>{step.description}</span>
                    </span>
                  </span>
                </a>
                {index < steps.length - 1 && (
                  <div className="absolute inset-0 top-0 left-0 hidden w-3 lg:block" aria-hidden="true">
                    <svg className="h-full w-full text-gray-300" viewBox="0 0 12 82" fill="none" preserveAspectRatio="none">
                      <path d="M0.5 0V31L10.5 41L0.5 51V82" stroke="currentcolor" vectorEffect="non-scaling-stroke" />
                    </svg>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default CheckoutSteps;
