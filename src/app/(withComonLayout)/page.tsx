


import Banner from '@/components/shared/Banner/Banner';
import PopularPlaces from '@/components/shared/PopularPlaces/PopularPlaces';
import WhyChooseUs from '@/components/shared/Service/Services';
import Testimonials from '@/components/shared/Tesimonial/Testimonial';


import React from 'react';
import PropertyPages from './property/page';

const HomePage = () => {
    return (
        <div>
          <Banner />
          <PropertyPages></PropertyPages>         
          <PopularPlaces/>
          <WhyChooseUs/>
          <Testimonials/>
          
          
          
       
          
        </div>
    );
};

export default HomePage;