import React from 'react';
import data from '../PopularDestination/data';

const PopularDestination = () => {
  return (
    <div className="">
      <div>
        <h3 className="font-bold text-3xl underline  decoration-red-500">
          Popular Destinations
        </h3>
        <h3 className="font-light mt-5">
          Most popular destinations around the world, from historical places to natural wonders.
        </h3>
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
            <p className="absolute bottom-4 left-70 text-white text-lg font-bold bg-opacity-50 px-3 py-1 rounded"> {destination.days}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularDestination;
