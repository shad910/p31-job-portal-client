import React from 'react';
import CountUp from 'react-countup';

const Counter = () => {
    return (
            <section className="bg-white py-16 px-6 md:px-12 my-10">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">
        
        <div className="space-y-2">
          <h3 className="text-3xl font-extrabold text-blue-600">
            <CountUp end={25} duration={30}/>K+</h3>
          <p className="text-lg font-semibold text-gray-800">Completed Cases</p>
          <p className="text-sm text-gray-500">
            We always provide people a complete solution upon focused of any business
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-3xl font-extrabold text-blue-600"><CountUp end={18} duration={30}/> +</h3>
          <p className="text-lg font-semibold text-gray-800">Our Office</p>
          <p className="text-sm text-gray-500">
            We always provide people a complete solution upon focused of any business
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-3xl font-extrabold text-blue-600"><CountUp end={86} duration={30}/> +</h3>
          <p className="text-lg font-semibold text-gray-800">Skilled People</p>
          <p className="text-sm text-gray-500">
            We always provide people a complete solution upon focused of any business
          </p>
        </div>

        <div className="space-y-2">
          <h3 className="text-3xl font-extrabold text-blue-600"><CountUp end={28} duration={30}/> +</h3>
          <p className="text-lg font-semibold text-gray-800">Happy Clients</p>
          <p className="text-sm text-gray-500">
            We always provide people a complete solution upon focused of any business
          </p>
        </div>

      </div>
    </section>
    );
};

export default Counter;