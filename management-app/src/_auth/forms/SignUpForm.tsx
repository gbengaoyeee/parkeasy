import { SignUpValidation, VisitorSignUpValidation } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Loader from "@/components/shared/Loader";

import { toast } from "sonner";
import { usePreSignUp, useSignUpVisitor } from "@/lib/react-query/queriesAndMutations";
import { useAppContext } from "@/context/AppContext";

const SignUpForm = () => {
  const navigate = useNavigate();
  const { isPending: isSigningUp, mutateAsync: preSignUp } = usePreSignUp();
  const { isPending: isSigningUpVisitor, mutateAsync: signUpVisitor } = useSignUpVisitor();
  const form = useForm<z.infer<typeof SignUpValidation>>({
    resolver: zodResolver(SignUpValidation),
    defaultValues: {
      companyName: "",
      email: "",
      contactNumber: "",
    },
  });

  const visitorSignUpForm = useForm<z.infer<typeof VisitorSignUpValidation>>({
    resolver: zodResolver(VisitorSignUpValidation),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
    },
  });

  const { tenant } = useAppContext();

  async function onSubmit(values: z.infer<typeof SignUpValidation | typeof VisitorSignUpValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    if (tenant === "visitor") {
      signUpVisitor(values as z.infer<typeof VisitorSignUpValidation>)
        .then((_) => {
          navigate("/request-success");
        })
        .catch((error) => {
          console.error(error.response.data.message);
          toast.error(error.response.data.message);
        });
    } else {
      preSignUp(values as z.infer<typeof SignUpValidation>)
        .then((_) => {
          navigate("/request-success");
        })
        .catch((error) => {
          console.error(error.response.data.message);
          toast.error(error.response.data.message);
        });
    }
  }
  return (
    <>
      {tenant === "host" ? (
        <Form {...form}>
          <div className="sm:w-420 flex-center flex-col">
            <form
              onSubmit={(e) => {
                form.handleSubmit(onSubmit)(e);
              }}
              className="flex flex-col w-full gap-5"
            >
              <>
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
              </>

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
      ) : (
        <Form {...visitorSignUpForm}>
          <div className="sm:w-420 flex-center flex-col">
            <form onSubmit={visitorSignUpForm.handleSubmit(onSubmit)} className="flex flex-col w-full gap-5">
              <>
                <span>
                  <h1 className="h2-bold">Sign-Up</h1>
                  <h4 className="base-medium m-0">Enter your details</h4>
                </span>

                <FormField
                  control={visitorSignUpForm.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input placeholder="John" {...field} />
                      </FormControl>
                      <FormMessage className="text-red" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={visitorSignUpForm.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Last Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Doe" {...field} />
                      </FormControl>
                      <FormMessage className="text-red" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={visitorSignUpForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="xyz@example.com" {...field} />
                      </FormControl>
                      <FormMessage className="text-red" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={visitorSignUpForm.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input placeholder="+971123456789" {...field} />
                      </FormControl>
                      <FormMessage className="text-red" />
                    </FormItem>
                  )}
                />
              </>

              <Button type="submit" disabled={isSigningUp} className="shad-button_primary">
                {isSigningUp || isSigningUpVisitor ? (
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
      )}
    </>
  );
};

export default SignUpForm;
