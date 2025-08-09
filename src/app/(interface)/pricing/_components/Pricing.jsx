import React from 'react';
import { Check } from 'lucide-react';

const Pricing = ({ prices, setShowPopup }) => (
  <div className="px-4 py-32 bg-gradient-to-br via-white to-purple-50 dark:via-gray-900 dark:to-gray-800 py-29 from-slate-50 dark:from-gray-900 sm:px-6 lg:px-8">
    <div className="mx-auto max-w-7xl">
      {/* Header Section */}
      <div className="mb-16 text-center">
        <h2 className="mb-4 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
          Choose the right plan for you
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-xl text-gray-600 dark:text-gray-300">
          Start your educational journey with us and get the best educational content
        </p>
      </div>

      {/* Pricing Cards */}
      {Array.isArray(prices) && prices.length > 0 ? (
        <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-2 lg:grid-cols-3">
          {prices.map((plan) => (
            <div
              key={plan.id}
              className={`relative rounded-3xl p-8 transition-all duration-300 hover:scale-105 hover:shadow-2xl border shadow-lg hover:shadow-xl ${
                plan.featured
                  ? 'bg-teal-600 text-white border-teal-600 dark:bg-teal-700 dark:border-teal-600'
                  : 'bg-white text-gray-900 border-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-700'
              }`}
            >
              {/* Plan Header */}
              <div className="mb-8 text-center">
                <h3 className={`text-2xl font-bold mb-2 ${
                  plan.featured ? 'text-white' : 'text-gray-900 dark:text-white'
                }`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${
                  plan.featured ? 'text-teal-100' : 'text-gray-600 dark:text-gray-300'
                }`}>
                  Group: {plan.group_num} | Duration: {plan.duration}
                </p>
                {/* Price */}
                <div className="mb-6">
                  <div className="flex items-center justify-center space-x-1">
                    <span className={`text-5xl font-bold ${
                      plan.featured ? 'text-white' : 'text-gray-900 dark:text-white'
                    }`}>
                      {plan.price}
                    </span>
                    <div className="text-left ml-2">
                      <span className={`text-lg font-medium ${
                        plan.featured ? 'text-white' : 'text-gray-900 dark:text-white'
                      }`}>
                        {plan.currency}
                      </span>
                      <span className={`text-sm block ${
                        plan.featured ? 'text-teal-100' : 'text-gray-500 dark:text-gray-400'
                      }`}>
                        / session
                      </span>
                    </div>
                  </div>
                  {plan.discount && Number(plan.discount) > 0 && (
                    <div className="text-sm text-green-600 dark:text-green-400 mt-2">
                      Discount: {plan.discount} {plan.currency}
                    </div>
                  )}
                  <div className={`text-sm mt-1 ${
                    plan.featured ? 'text-teal-100' : 'text-gray-500 dark:text-gray-400'
                  }`}>
                    Hour Price: {plan.hour_price} {plan.currency} ({plan.hour_num} hours)
                  </div>
                </div>
              </div>

              {/* Features List */}
              <div className="mb-8 space-y-4">
                {plan.price_feature.map((feature) => (
                  <div key={feature.id} className="flex items-start space-x-3">
                    <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                      plan.featured ? 'bg-teal-500' : 'bg-teal-600 dark:bg-teal-500'
                    }`}>
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className={`text-sm leading-relaxed ${
                      plan.featured ? 'text-teal-100' : 'text-gray-600 dark:text-gray-300'
                    }`}>
                      {feature.description}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <button className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-4 shadow-lg ${
                plan.featured
                  ? 'bg-white text-teal-600 hover:bg-gray-100 focus:ring-white/30'
                  : 'bg-teal-600 text-white hover:bg-teal-700 focus:ring-teal-300 dark:bg-teal-500 dark:hover:bg-teal-400 dark:focus:ring-teal-300'
              }`}>
                Subscribe Now
              </button>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 dark:text-gray-400 py-16 text-xl font-semibold">
          There are no pricing plans available at the moment
        </div>
      )}

      {/* Bottom Section */}
      <div className="mt-16 text-center">
        <div className="flex justify-center space-x-8 text-sm text-gray-500 dark:text-gray-400">
          <span>✓ 24/7 technical support</span>
          <span>✓ Free updates</span>
          <span>✓ Certified certificates</span>
        </div>
        <div className="mt-10">
          <p className="text-lg font-medium text-gray-800 dark:text-gray-200">
            Can't find a plan that's right for you?
          </p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
            Click here to create a custom plan tailored to your needs.
          </p>
          {/* <button
            onClick={() => setShowPopup && setShowPopup(true)}
            className="mt-6 inline-block rounded-xl bg-teal-600 dark:bg-teal-700 px-8 py-3 text-base font-semibold text-white shadow-lg dark:shadow-teal-500/20 transition-transform duration-200 hover:scale-105 hover:bg-teal-700 dark:hover:bg-teal-600 focus:outline-none focus:ring-4 focus:ring-teal-300 dark:focus:ring-teal-500/50"
          >
            Create a Custom Plan
          </button> */}
        </div>
      </div>
    </div>
  </div>
);

export default Pricing;