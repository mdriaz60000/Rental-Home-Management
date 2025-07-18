/* eslint-disable @typescript-eslint/no-explicit-any */
 "use server"

  import { jwtDecode } from "jwt-decode";
import { cookies } from "next/headers";
import { FieldValues } from "react-hook-form";

export const registerUser = async (userData: FieldValues) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
       credentials: "include",
      body: JSON.stringify(userData),
    });
    const result = await res.json();

      

    if (result.success) {
      (await cookies()).set("accessToken", result.data.accessToken);
        // (await cookies()).set("reFreshToken", result.data.reFreshToken);
    }

    return result;
  
  } catch (error: any) {
    return Error(error);
  }
};


export const loginUser = async (userData: FieldValues) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const result = await res.json();

    if (result.success) {
      (await cookies()).set("accessToken", result.data.accessToken);
      (await cookies()).set("reFreshToken", result.data.reFreshToken);
    }

    return result;
  } catch (error: any) {
    return Error(error);
  }
};




export const getCurrentUser = async () => {
    const accessToken = (await cookies()).get("accessToken")!.value;
    // const reFreshToken = (await cookies()).get("reFreshToken")!.value;
    let decodedData = null;
  
    if (accessToken) {
      decodedData = await jwtDecode(accessToken);
      return decodedData;
    } else {
      return null;
    }
  };

 export const Logout = async () =>{  
    (await cookies()).delete("reFreshToken")
  }






