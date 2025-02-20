import React from 'react';
import data from '../PopularDestination/data';

const PopularDestination = () => {
  return (
    <div className="mt-26 px-10">
      <div>
        <p className="font-bold text-3xl underline underline-offset-8 decoration-red-500">
          Popular Destinations
        </p>
        <p className="font-light mt-4">
          Most popular destinations around the world, from historical places to natural wonders.
        </p>
      </div>

     
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        {data.map((destination) => (
          <div key={destination.id} className="relative">
            <img
              src={destination.Image}
              alt={destination.title}
              className="w-full h-60 object-cover rounded-lg"
            />
            <p className="absolute bottom-4 left-4 text-white text-lg font-bold bg-opacity-50 px-3 py-1 rounded">
              {destination.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularDestination;
