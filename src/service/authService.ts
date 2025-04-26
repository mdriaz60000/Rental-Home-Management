import { jwtDecode } from "jwt-decode";
import { NextRequest } from "next/server";

interface TDecodeData{
  role: string
}
export const getCurrentUser = async (request: NextRequest) => {
  const reFreshToken = request.cookies.get('reFreshToken')?.value;
  let decodedData = null;

  if (reFreshToken) {
    decodedData = jwtDecode<TDecodeData>(reFreshToken);
    return  { userInfo: decodedData } ;
  } else {
    return{userInfo: null};
  }
};


