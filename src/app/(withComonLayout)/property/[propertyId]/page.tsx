import PropertyDetails from "@/components/shared/PopularPropaties/PropertyDetails";


const PropertyDetailsPage = async ({params}: {params: Promise<{propertyId: string}>}) => {
    const {propertyId} = await params
     
    return (
        <div>
         <PropertyDetails propertyId={propertyId}/>
        </div>
    );
};

 export default PropertyDetailsPage;



 


 // import PropertyDetails from '@/components/shared/PopularPropaties/PropertyDetails';
// import React from 'react';

// interface Props {
//   params: {
//     propertyId: string;
//   };
// }

// const PropertyPage = ({ params }: Props) => {
//   console.log(params.propertyId); // This should now log the correct ID
//   return (
//     <div>
//       <PropertyDetails propertyId={params.propertyId} />
//     </div>
//   );
// };
// export default PropertyPage;