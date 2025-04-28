"use client";

import Link from "next/link";
import { signOut } from "next-auth/react";
import { Home, Building, User, LayoutDashboard, LogIn, LogOut } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Logout, useCurrentUser } from "@/redux/features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

interface UserData {
  role?: "admin" | "landlord" | "tenant";
  // Add other user properties here if needed
}

const Navbar = () => {
  const user = useAppSelector(useCurrentUser) as UserData | null;
  const userRole = user?.role;
  const dispatch = useAppDispatch();
  
  const handleLogout = () => {
    dispatch(Logout());
    signOut(); 
  };

  // Determine dashboard label and link based on role
  const getDashboardInfo = () => {
    switch(userRole) {
      case "admin": return { label: "Admin", path: "/admin" };
      case "landlord": return { label: "Landlord", path: "/landlord" };
      case "tenant": return { label: "Tenant", path: "/tenant" };
      default: return { label: "Dashboard", path: "/dashboard" };
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Building className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">RentalHomes</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1">
              <Home className="h-4 w-4" />
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">
              About Us
            </Link>
            <Link href="/contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact Us
            </Link>

            {userRole && ["admin", "landlord", "tenant"].includes(userRole) ? (
              <>
                <Link 
                  href={getDashboardInfo().path}
                  className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1"
                >
                  <LayoutDashboard className="h-4 w-4" />
                  {getDashboardInfo().label}
                </Link>

                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center gap-1">
                      <User className="h-4 w-4" />
                      <span>My Profile</span>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem 
                      onClick={handleLogout}
                      className="text-red-500 focus:text-red-500"
                    >
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </>
            ) : (
              <Link 
                href="/login" 
                className="text-sm font-medium hover:text-primary transition-colors flex items-center gap-1"
              >
                <LogIn className="h-4 w-4" />
                Login/Register
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" size="icon">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="4" x2="20" y1="12" y2="12" />
                    <line x1="4" x2="20" y1="6" y2="6" />
                    <line x1="4" x2="20" y1="18" y2="18" />
                  </svg>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem asChild>
                  <Link href="/" className="flex items-center gap-2">
                    <Home className="h-4 w-4" />
                    Home
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/about" className="flex items-center gap-2">
                    About Us
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/contact" className="flex items-center gap-2">
                    Contact Us
                  </Link>
                </DropdownMenuItem>
                {userRole && ["admin", "landlord", "tenant"].includes(userRole) ? (
                  <>
                    <DropdownMenuItem asChild>
                      <Link href={getDashboardInfo().path} className="flex items-center gap-2">
                        <LayoutDashboard className="h-4 w-4" />
                        {getDashboardInfo().label}
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleLogout} className="text-red-500">
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign Out
                    </DropdownMenuItem>
                  </>
                ) : (
                  <DropdownMenuItem asChild>
                    <Link href="/login" className="flex items-center gap-2">
                      <LogIn className="h-4 w-4" />
                      Login/Register
                    </Link>
                  </DropdownMenuItem>
                )}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;