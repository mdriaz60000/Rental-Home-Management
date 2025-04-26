export interface Property {
    _id: string;
    title: string;
    location: string;
    rentAmount: number;
    description: string;
    bedrooms?: number;
    numberOfBedrooms?: number; // If you're using this somewhere
    squareFeet: number;
    RepresentativeImages: string;
  }