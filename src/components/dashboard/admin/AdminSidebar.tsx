'use client';

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuTrigger,
// } from '@/components/ui/dropdown-menu';
import { usePathname } from 'next/navigation';
import Link from 'next/link';


export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-primary text-secondary p-4">
      <h2 className="text-xl font-bold mb-6">Admin Dashboard</h2>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link
              href="/admin/overview"
              className={`block p-2 rounded ${
                pathname.startsWith('/admin/overview')
                  ? 'bg-gray-700'
                  : 'hover:bg-gray-700'
              }`}
            >
              Overview
            </Link>
          </li>
          <li>
            <Link
              href="/admin/users"
              className={`block p-2 rounded ${
                pathname.startsWith('/admin/users')
                  ? 'bg-gray-700'
                  : 'hover:bg-gray-700'
              }`}
            >
              User Management
            </Link>
          </li>
          <li>
            <Link
              href="/admin/listings"
              className={`block p-2 rounded ${
                pathname.startsWith('/admin/listings')
                  ? 'bg-gray-700'
                  : 'hover:bg-gray-700'
              }`}
            >
              Listing Management
            </Link>
          </li>
         
          <li>
            <Link
              href="/admin/rentalRequest"
              className={`block p-2 rounded ${
                pathname.startsWith('/admin/listingRequest')
                  ? 'bg-gray-700'
                  : 'hover:bg-gray-700'
              }`}
            >
             Rental Request
            </Link>
          </li>
          <li>
            <Link
              href="/admin/message"
              className={`block p-2 rounded ${
                pathname.startsWith('/admin/message')
                  ? 'bg-gray-700'
                  : 'hover:bg-gray-700'
              }`}
            >
              Message
            </Link>
          </li>
          <br />
          <li>
  
            <Link
   
              href="/"
              className={`block p-2 bg-secondary text-primary hover:text-red-500 rounded  `}
   
            >
            
              Back To Home 
              
            </Link>
          </li>
          {/* <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button
                  className={`w-full text-left block p-2 rounded ${
                    pathname.startsWith('/profile') ||
                    pathname.startsWith('/my-listings') ||
                    pathname.startsWith('/favorites')
                      ? 'bg-gray-700'
                      : 'hover:bg-gray-700'
                  }`}
                >
                  Property Management
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem asChild>
                  <Link href="/profile" className="block w-full text-left p-2">
                    Add Property
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/my-listings" className="block w-full text-left p-2">
                    My Listings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link href="/favorites" className="block w-full text-left p-2">
                    Saved Properties
                  </Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </li> */}
        </ul>
      </nav>
    </div>
  );
}
