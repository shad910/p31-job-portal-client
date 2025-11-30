import React from 'react';
import CountUp from 'react-countup';

const Counter = () => {
  return (
    <section className="bg-base-100 text-base-content py-16 px-6 md:px-12 my-10 transition-colors duration-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-center">

        {/* Completed Cases */}
        <div className="space-y-2">
          <h3 className="text-3xl font-extrabold text-primary">
            <CountUp end={1000} duration={10} />K+
          </h3>
          <p className="text-lg font-semibold">Completed Cases</p>
          <p className="text-sm opacity-80">
            We always provide people a complete solution upon focused of any business
          </p>
        </div>

        {/* Our Office */}
        <div className="space-y-2">
          <h3 className="text-3xl font-extrabold text-primary">
            <CountUp end={100} duration={10} />+
          </h3>
          <p className="text-lg font-semibold">Our Office</p>
          <p className="text-sm opacity-80">
            We always provide people a complete solution upon focused of any business
          </p>
        </div>

        {/* Skilled People */}
        <div className="space-y-2">
          <h3 className="text-3xl font-extrabold text-primary">
            <CountUp end={5000} duration={10} />+
          </h3>
          <p className="text-lg font-semibold">Skilled People</p>
          <p className="text-sm opacity-80">
            We always provide people a complete solution upon focused of any business
          </p>
        </div>

        {/* Happy Clients */}
        <div className="space-y-2">
          <h3 className="text-3xl font-extrabold text-primary">
            <CountUp end={50000} duration={10} />+
          </h3>
          <p className="text-lg font-semibold">Happy Clients</p>
          <p className="text-sm opacity-80">
            We always provide people a complete solution upon focused of any business
          </p>
        </div>

      </div>
    </section>

  );
};

export default Counter;