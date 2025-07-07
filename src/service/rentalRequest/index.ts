// rentalRequest.ts
export interface RentalRequestPayload {
  phone: string;
  moveInDate: Date;
  duration: string;
  rentId: string;
  listingsId: string;
}

export const rentalRequest = async (data: RentalRequestPayload) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/requestRental`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const result = await res.json();
    return result;
  } catch (error) {
    console.error("Rental request failed", error);
    return { success: false, error: "Something went wrong" };
  }
};


// services/rentalService.ts
export const getRentalRequest = async (userId: string) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/requestRental/${userId}`, {
      method: "GET",
      headers: {
        'Content-Type': 'application/json',
      }
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const result = await res.json();
    return result;
  } catch (error) {
    console.error("Rental request failed", error);
    return { success: false, error: "Something went wrong" };
  }
};
