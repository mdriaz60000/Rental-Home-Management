/* eslint-disable @typescript-eslint/no-explicit-any */


export const addListings = async (listingData: any) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(listingData)
    });

    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }

    const data = await res.json();
    return {
      success: true,
      data: data,
      message: "Listing created successfully"
    };
  } catch (error: any) {
    console.error("Error adding listing:", error);
    return {
      success: false,
      message: error.message || "Failed to create listing"
    };
  }
};


export const getMyListings = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/listings`);
    const data = await res.json();
    return {
      success: true,
      data,
    };
  } catch (error: any) {
    return {
      success: false,
      data: null,
      message: error.message,
    };
  }
};



  export const getAllCategories = async () => {
    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/category`);
  
      return res.json();
    } catch (error: any) {
      return Error(error);
    }
  };