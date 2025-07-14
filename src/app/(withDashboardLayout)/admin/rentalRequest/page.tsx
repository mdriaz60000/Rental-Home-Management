/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useEffect, useState } from "react";
import { toast } from "sonner"; 
import { Button } from "@/components/ui/button";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { Loader2 } from "lucide-react";
import { RentalRequestType } from "@/type/rentalRequest";



const RentalRequest = () => {
  const [requests, setRequests] = useState<RentalRequestType[]>([]);
  const [loading, setLoading] = useState(true);
  const [acceptingId, setAcceptingId] = useState<string | null>(null);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/requestRental`);
        const data = await res.json();
        setRequests(data?.data || []);
      } catch (error) {
        toast.error("Failed to load rental requests, error", );
      } finally {
        setLoading(false);
      }
    };

    fetchRequests();
  }, []);

  const handleAccept = async (id: string) => {
    try {
      setAcceptingId(id);

      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/requestRentalUpdate/${id}`, {
        method: "PATCH",
      });

      const result = await res.json();

      if (result.success) {
        toast.success("Request accepted");
        setRequests(prev =>
          prev.map(r => (r._id === id ? { ...r, status: "accepted", isAvailable: false } : r))
        );
      } else {
        toast.error(result.message || "Failed to accept.");
      }
    } catch (err) {
      toast.error("Error accepting request.");
    } finally {
      setAcceptingId(null);
    }
  };

 

  return (
    <div className="p-6 space-y-6">
      <h2 className="text-2xl font-bold">🏠 Rental Requests</h2>

      {loading ? (
        <div className="flex justify-center py-10">
          <Loader2 className="w-6 h-6 animate-spin text-muted-foreground" />
        </div>
      ) : requests.length === 0 ? (
        <p className="text-muted-foreground">No rental requests found.</p>
      ) : (
        <Card className="p-4">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Phone</TableHead>
                <TableHead>Move In</TableHead>
                <TableHead>Duration</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {requests.map((req) => (
                <TableRow key={req._id}>
                  <TableCell>{req.phone}</TableCell>
                  <TableCell>{new Date(req.moveInDate).toLocaleDateString()}</TableCell>
                  <TableCell>{req.duration} months</TableCell>
                  <TableCell className="capitalize">{req.status}</TableCell>
                  <TableCell className="text-right">
                    {req.status === "pending" ? (
                      <Button
                        size="sm"
                        onClick={() => handleAccept(req._id)}
                        disabled={acceptingId === req._id}
                      >
                        {acceptingId === req._id ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          "Accept"
                        )}
                      </Button>
                    ) : (
                      <span className="text-green-600 font-semibold">Accepted</span>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Card>
      )}
    </div>
  );
};

export default RentalRequest;
