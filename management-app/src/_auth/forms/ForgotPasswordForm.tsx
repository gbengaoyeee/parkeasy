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
import { SSOValidation } from "@/lib/validation";
import { z } from "zod";
import { useNavigate } from "react-router-dom";
import { useStartPasswordRecovery } from "@/lib/react-query/queriesAndMutations";
import Loader from "@/components/shared/Loader";
import { AppwriteException } from "appwrite";
import { toast } from "sonner";

const ForgotPasswordForm = () => {
  const { isPending: isLoading, mutateAsync: handleSubmit } = useStartPasswordRecovery();
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
    handleSubmit(values)
      .then((_) => {
        toast.success("Please check your email for a reset link");
      })
      .catch((error) => {
        console.error(error.message);
        if (error instanceof AppwriteException) {
          toast.error(error.message);
          return;
        }
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
                <FormMessage />
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
              <span>Reset</span>
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
          <p>Contact us: support@parkeasy.com</p>
        </span>
      </div>
    </Form>
  );
};

export default ForgotPasswordForm;
