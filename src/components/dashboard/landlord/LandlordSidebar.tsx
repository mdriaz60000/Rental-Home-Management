"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function LandlordSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-primary text-secondary p-4">
      <h2 className="text-xl font-bold mb-6">Landlord Dashboard</h2>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link
              href="/landlord/profile"
              className={`block p-2 rounded ${
                pathname.startsWith('/landlord/listings') 
                  ? 'bg-indigo-700' 
                  : 'hover:bg-indigo-700'
              }`}
            >
              Profile
            </Link>
          </li>
          <li>
            <Link
              href="/landlord/addListing"
              className={`block p-2 rounded ${
                pathname.startsWith('/landlord/listings') 
                  ? 'bg-indigo-700' 
                  : 'hover:bg-indigo-700'
              }`}
            >
              Add Listings
            </Link>
          </li>
          <li>
            <Link
              href="/landlord/myListing"
              className={`block p-2 rounded ${
                pathname.startsWith('/landlord/myListing') 
                  ? 'bg-indigo-700' 
                  : 'hover:bg-indigo-700'
              }`}
            >
              My Listings
            </Link>
          </li>
          <li>
            <Link
              href="/landlord/rentalRequest"
              className={`block p-2 rounded ${
                pathname.startsWith('/landlord/requests') 
                  ? 'bg-indigo-700' 
                  : 'hover:bg-indigo-700'
              }`}
            >
              Rental Requests
            </Link>
          </li>
          <br />
          <li>
            <Link
              href="/"
              className="block p-2 rounded hover:bg-indigo-700"   
            >
              Back To Home
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}