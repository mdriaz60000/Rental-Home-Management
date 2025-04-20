

import Banner from '@/components/shared/Banner/Banner';
import PopularPlaces from '@/components/shared/PopularPlaces/PopularPlaces';
import PopularProperties from '@/components/shared/PopularPropaties/PopularPropaties';
import WhyChooseUs from '@/components/shared/Service/Services';
import Testimonials from '@/components/shared/Tesimonial/Testimonial';


import React from 'react';

const HomePage = () => {
    return (
        <div>
          <Banner />
          <PopularProperties/>
          <PopularPlaces/>
          <WhyChooseUs/>
          <Testimonials/>
          
       
          
        </div>
    );
};

export default HomePage;