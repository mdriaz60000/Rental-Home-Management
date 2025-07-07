import ListingsDetails from '@/components/shared/PopulerListings/ListingsDetails';
import React from 'react';

const page = async ({params}: {params: Promise<{listingId: string}>} ) => {
    const {listingId} = await params

    const res = await fetch( `${process.env.NEXT_PUBLIC_BASE_API}/listings/${listingId}`,
    { next: { revalidate: 60 } }
    )
    const listing = await res.json()
    const listings = listing.data
    
 
     
    return (
        <div>
            <ListingsDetails listings={listings}></ListingsDetails>
           
        </div>
    );
};

export default page;