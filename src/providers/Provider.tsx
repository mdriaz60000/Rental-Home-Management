// "use client";

// import UserProvider from "@/context/UserContext";

// const Providers = ({ children }: { children: React.ReactNode }) => {
//   return <UserProvider>{children}</UserProvider>;
// };

// export default Providers;


"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useState } from "react";
import UserProvider from "@/context/UserContext";

const Providers = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>{children}</UserProvider>
    </QueryClientProvider>
  );
};

export default Providers;
