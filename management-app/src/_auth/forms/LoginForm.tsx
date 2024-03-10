import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {  SSOValidation } from "@/lib/validation";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import Loader from "@/components/shared/Loader";
import { useAuthContext } from "@/context/AuthContext";
import { getManagementByEmail } from "@/api/management";

const LoginForm = () => {
  // const { isPending: isSigningIn, mutateAsync: handleSignIn } = useLoginByEmail();
  const { signInPasswordless, isLoading: isSigningIn } = useAuthContext();

  const form = useForm<z.infer<typeof SSOValidation>>({
    resolver: zodResolver(SSOValidation),
    defaultValues: {
      email: "",
    },
  });
  // const form = useForm<z.infer<typeof LoginValidation>>({
  //   resolver: zodResolver(LoginValidation),
  //   defaultValues: {
  //     email: "",
  //     password: "",
  //   },
  // });

  function onSubmit(values: z.infer<typeof SSOValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // signInWithEmail(values);
    getManagementByEmail(values.email)
      .then((_) => {
        signInPasswordless(values).then((_) => {
          toast.success("Please check your email from login link");
        });
      })
      .catch((error) => {
        console.error(error.message);
        toast.error(error.response.data.message);
      });
  }
  return (
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col">
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col w-full gap-5">
          <h1 className="h2-bold">
            Welcome
            <br /> Building Facility Manager
          </h1>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company Email</FormLabel>
                <FormControl>
                  <Input placeholder="xyz@company.com" {...field} />
                </FormControl>
                <FormMessage className="shad-form_message" />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isSigningIn} className="shad-button_primary">
            {isSigningIn ? (
              <div className="flex-center gap-3">
                <Loader />
                Submitting
              </div>
            ) : (
              <span>Login</span>
            )}
          </Button>
        </form>

        {/* <span className="flex flex-center m-9 w-full">
          <hr className="w-full border-gray-1" /> <hr />
          <span className="px-2 text-xs text-gray-1">OR</span>
          <hr className="w-full border-gray-1" /> <hr />
        </span>

        <Button type="submit" disabled={isSigningIn} className="shad-button_secondary w-full">
          <Link to={"/sso"} className="w-full h-full">
            Use single sign-on(SSO) instead
          </Link>
        </Button> */}
        <span className="text-gray-1 text-sm w-full flex-center flex-col mt-2">
          <p>Trouble logging in?</p>
          <p>Contact us: support@parkeasy.com</p>
        </span>

        <span className="text-sm mt-6">
          Don&#39;t have an account?{" "}
          <Link className="text-blue-500 cursor-pointer underline" to={"/sign-up"}>
            Sign up
          </Link>
        </span>
      </div>
    </Form>
  );
};

export default LoginForm;
