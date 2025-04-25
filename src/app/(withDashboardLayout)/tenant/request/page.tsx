// import RequestTable from '@/components/RequestTable';
// import { getTenantRequests } from '@/lib/api/tenant';
import Link from 'next/link';

export default async function TenantRequestsPage() {
//   const requests = await getTenantRequests();

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">My Rental Requests</h1>
        <Link 
          href="/tenant/requests/new"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          + New Request
        </Link>
      </div>
      {/* <RequestTable requests={requests} /> */}
    </div>
  );
}