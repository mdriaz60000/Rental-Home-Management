// // "@/service/authService.ts"
// "use client";

// import Cookies from "js-cookie";
// import { jwtDecode } from "jwt-decode";

// export const getCurrentUser = async () => {
//   const accessToken = Cookies.get("accessToken"); 
//   let decodedData = null;

//   if (accessToken) {
//     decodedData = jwtDecode(accessToken);
//     // console.log(decodedData)
//     return decodedData;
//   } else {
//     return null;
//   }
// };
