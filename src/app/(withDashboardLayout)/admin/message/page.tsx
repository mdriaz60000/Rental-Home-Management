"use client";

import { useEffect, useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

import { Loader2, MailWarning } from "lucide-react";

type IMessage = {
  UserName: string;
  email: string;
  message: string;
  isDeleted?: boolean;
};

const Message = () => {
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getMessages = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/message`);
        const result = await res.json();

        if (Array.isArray(result.data)) {
          setMessages(result.data);
        } else {
          console.warn("Unexpected data format:", result);
          setMessages([]);
        }
      } catch (error) {
        console.error("Failed to load messages:", error);
        setMessages([]);
      } finally {
        setLoading(false);
      }
    };

    getMessages();
  }, []);

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-2xl font-bold mb-6">📬 User Messages</h1>

      {loading ? (
        <div className="flex justify-center items-center h-60">
          <Loader2 className="animate-spin w-8 h-8 text-gray-500" />
        </div>
      ) : messages.length === 0 ? (
        <div className="flex flex-col items-center justify-center text-center text-muted-foreground py-12">
          <MailWarning className="w-12 h-12 mb-2" />
          <p>No messages found</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {messages.map((msg, index) => (
            <Card key={index} className="hover:shadow-lg transition">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <h2 className="font-semibold">{msg.UserName}</h2>
  
                </div>
                <p className="text-sm text-muted-foreground">{msg.email}</p>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-800">{msg.message}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default Message;
