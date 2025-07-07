"use client";

// import { getCurrentUser } from "@/service/authService/cookietoken";
import { useQuery } from "@tanstack/react-query";
 import { getCurrentUser } from "@/service/authService";

export const useGetCurrentUser = () => {
  return useQuery({
    queryKey: ["current-user"],
    queryFn: getCurrentUser,
    staleTime: 5 * 60 * 1000,
    retry: false,
  });
};