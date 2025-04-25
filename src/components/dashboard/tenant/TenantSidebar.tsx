"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function TenantSidebar() {
  const pathname = usePathname();

  return (
    <div className="w-64 bg-blue-800 text-white p-4">
      <h2 className="text-xl font-bold mb-6">Tenant Dashboard</h2>
      <nav>
        <ul className="space-y-2">
          <li>
            <Link
              href="/tenant/requests"
              className={`block p-2 rounded ${
                pathname.startsWith('/tenant/requests') 
                  ? 'bg-blue-700' 
                  : 'hover:bg-blue-700'
              }`}
            >
              My Requests
            </Link>
          </li>
          <li>
            <Link
              href="/tenant/profile"
              className={`block p-2 rounded ${
                pathname === '/tenant/profile' 
                  ? 'bg-blue-700' 
                  : 'hover:bg-blue-700'
              }`}
            >
              My Profile
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}