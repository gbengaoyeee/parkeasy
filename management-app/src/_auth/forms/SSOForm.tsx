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
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { SSOValidation } from "@/lib/validation";
import { toast } from "sonner";
import { getUser } from "@/api/user";
import appwriteClient from "@/api/appwrite";
import { useState } from "react";
import Loader from "@/components/shared/Loader";
import { useNavigate } from "react-router-dom";

const SSOForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const form = useForm<z.infer<typeof SSOValidation>>({
    resolver: zodResolver(SSOValidation),
    defaultValues: {
      email: "",
    },
  });
  function onSubmit(values: z.infer<typeof SSOValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    handleSSO(values);
  }

  const handleSSO = (values: z.infer<typeof SSOValidation>) => {
    setIsLoading(true);
    getUser(values.email)
      .then((user) => {
        appwriteClient.account
          .createMagicURLSession(
            user.id,
            values.email,
            `${import.meta.env.VITE_APP_URL}/sso-redirect`
          )
          .then((_) => {
            toast.success("Please check your email from login link");
          });
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      })
      .finally(() => setIsLoading(false));
  };

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
                <FormMessage className="text-red" />
              </FormItem>
            )}
          />
          <Button disabled={isLoading} type="submit" className="shad-button_primary">
            {isLoading ? (
              <div className="flex-center gap-3">
                <Loader />
                Submitting
              </div>
            ) : (
              <span>Login</span>
            )}
          </Button>
        </form>

        <span className="flex flex-center m-9 w-full">
          <hr className="w-full border-gray-1" /> <hr />
          <span className="px-2 text-xs text-gray-1">OR</span>
          <hr className="w-full border-gray-1" /> <hr />
        </span>

        <Button
          disabled={isLoading}
          onClick={() => navigate("/login")}
          className="shad-button_secondary w-full"
        >
          Use password instead
        </Button>
        <span className="text-gray-1 text-sm w-full flex-center flex-col mt-2">
          <p>Trouble logging in?</p>
          <p>Contact us: support@easyparkway.com</p>
        </span>
      </div>
    </Form>
  );
};

export default SSOForm;
