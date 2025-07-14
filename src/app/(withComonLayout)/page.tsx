
import Banner from '@/components/shared/Banner/Banner';
import PopularPlaces from '@/components/shared/PopularPlaces/PopularPlaces';
import WhyChooseUs from '@/components/shared/Service/Services';
import Testimonials from '@/components/shared/Tesimonial/Testimonial';

import React from 'react';
import ListingsPages from './listings/page';
import DiscoverListing from '@/components/shared/DiscoverListings/DiscoverListings';


const HomePage = () => {
    return (
        <div>
          <Banner />
           <ListingsPages/>
          <PopularPlaces/>
          <WhyChooseUs/>
          <DiscoverListing/>
          <Testimonials/>
          
        </div>
    );
};

export default HomePage;