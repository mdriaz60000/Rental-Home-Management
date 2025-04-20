

import Banner from '@/components/shared/Banner/Banner';
import PopularPlaces from '@/components/shared/PopularPlaces/PopularPlaces';
import PopularProperties from '@/components/shared/PopularPropaties/PopularPropaties';



import React from 'react';

const HomePage = () => {
    return (
        <div>
          <Banner />
          <PopularProperties/>
          <PopularPlaces/>
          
        </div>
    );
};

export default HomePage;