"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
    import { UserCog, Building2 } from "lucide-react"; 
import { useRouter, useSearchParams } from "next/navigation";
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { 
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { toast } from "sonner";
import Link from "next/link";

import { loginUser } from "@/service/authService";
import { useUser } from "@/context/UserContext";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const demoUsers = {
  admin: {
    email: "riz@gmail.com",
    password: "202020",
  },
  landlord: {
    email: "sumon@gmail.com",
    password: "202020",
  },
};

export default function Login() {

  const { refetch } = useUser();
  const router = useRouter();
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get('redirectUrl') || '/';

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    // console.log(data)
   try{
   
    const res = await loginUser(data)
    if (res.success) {
      toast.success("Login Successful");
       await refetch?.()
      router.push(redirectUrl); 
      
    }

   }catch(err){
    console.log(err,"error data")
   }
   
    
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 p-4">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold">Welcome Back</CardTitle>
          <CardDescription>
            Log in to your account to continue
          </CardDescription>
        </CardHeader>
        
   {/*  Demo Login Buttons */}
  

<div className="flex flex-col gap-4 px-2 md:px-4 mb-1">
  <p className="text-center text-muted-foreground text-sm tracking-wide">
    Use demo login
  </p>
  <div className="grid grid-cols-2 gap-3">
    <Button
      type="button"
      variant="outline"
      className="h-11 rounded-xl border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 gap-2 group"
      onClick={async () => {
        form.setValue("email", demoUsers.admin.email);
        form.setValue("password", demoUsers.admin.password);
        await form.handleSubmit(onSubmit)(); 
      }}
    >
      <UserCog
        className="w-4 h-4 text-primary group-hover:text-white transition-all duration-300"
      />
      Admin Demo
    </Button>

    <Button
      type="button"
      variant="outline"
      className="h-11 rounded-xl border border-primary text-primary hover:bg-primary hover:text-white transition-colors duration-300 gap-2 group"
      onClick={async () => {
        form.setValue("email", demoUsers.landlord.email);
        form.setValue("password", demoUsers.landlord.password);
        await form.handleSubmit(onSubmit)(); // auto submit
      }}
    >
      <Building2
        className="w-4 h-4 text-primary group-hover:text-white transition-all duration-300"
      />
      Landlord Demo
    </Button>
  </div>
</div>


        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input 
                        placeholder="your@email.com" 
                        {...field} 
                        className="h-12"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between items-center">
                      <FormLabel>Password</FormLabel>
                      <Link 
                        href="/forgot-password" 
                        className="text-sm text-primary hover:underline"
                      >
                        Forgot password?
                      </Link>
                    </div>
                    <FormControl>
                      <Input 
                        type="password" 
                        placeholder="******" 
                        {...field} 
                        className="h-12"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              
              <Button 
                type="submit" 
                className="w-full h-12"
                disabled={form.formState.isSubmitting}
              >
                {form.formState.isSubmitting ? "Signing in..." : "Sign In"}
              </Button>
            </form>
          </Form>

            <div className="mt-6 text-center text-sm">
            Do not have an account?
            <Link 
              href="/register" 
              className="text-primary hover:underline"
            >
              Sign up
            </Link>
          </div>

          <div className="my-6 flex items-center">
            <Separator className="flex-1" />
            <span className="px-4 text-sm text-muted-foreground">OR</span>
            <Separator className="flex-1" />
          </div>

          <div className="flex flex-col gap-3">
            <Button 
              variant="outline" 
              className="h-12 gap-2"
             
            >
             
              Continue with Google
            </Button>
            
            <Button 
              variant="outline" 
              className="h-12 gap-2"
              
            >
             
              Continue with GitHub
            </Button>
          </div>


        </CardContent>
      </Card>
    </div>
  );
}