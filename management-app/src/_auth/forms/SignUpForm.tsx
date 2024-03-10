import { SignUpValidation } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Loader from "@/components/shared/Loader";

import { toast } from "sonner";
import { usePreSignUp } from "@/lib/react-query/queriesAndMutations";

const SignUpForm = () => {
  const navigate = useNavigate();
  const { isPending: isSigningUp, mutateAsync: preSignUp } = usePreSignUp();
  const form = useForm<z.infer<typeof SignUpValidation>>({
    resolver: zodResolver(SignUpValidation),
    defaultValues: {
      companyName: "",
      email: "",
      contactNumber: "",
    },
  });

  async function onSubmit(values: z.infer<typeof SignUpValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    preSignUp(values)
      .then((_) => {
        navigate("/request-success");
      })
      .catch((error) => {
        console.error(error.response.data.message);
        toast.error(error.response.data.message);
      });
  }
  return (
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col">
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col w-full gap-5">
          <span>
            <h1 className="h2-bold">Quick Sign-Up Request</h1>
            <h4 className="base-medium m-0">Add your company details</h4>
          </span>
          <FormField
            control={form.control}
            name="companyName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Name</FormLabel>
                <FormControl>
                  <Input placeholder="ABC Management Company" {...field} />
                </FormControl>
                <FormMessage className="text-red" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Email</FormLabel>
                <FormControl>
                  <Input placeholder="xyz@company.com" {...field} />
                </FormControl>
                <FormMessage className="text-red" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contactNumber"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Contact Number</FormLabel>
                <FormControl>
                  <Input placeholder="Enter your contact phone number" {...field} />
                </FormControl>
                <FormMessage className="text-red" />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isSigningUp} className="shad-button_primary">
            {isSigningUp ? (
              <div className="flex-center gap-3">
                <Loader />
                Submitting
              </div>
            ) : (
              <span>Submit</span>
            )}
          </Button>
        </form>
        <span className="text-sm mt-6">
          Already have an account?{" "}
          <Link className="text-blue-500 cursor-pointer underline" to={"/login"}>
            Sign in
          </Link>
        </span>
      </div>
    </Form>
  );
};

export default SignUpForm;
