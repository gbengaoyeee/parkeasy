import Loader from "@/components/shared/Loader";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAppContext } from "@/context/AppContext";
import { useVerifyPhone } from "@/lib/react-query/queriesAndMutations";
import { VerifyPhoneValidation } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { z } from "zod";

const EnterPhone = () => {
  const form = useForm<z.infer<typeof VerifyPhoneValidation>>({
    resolver: zodResolver(VerifyPhoneValidation),
    defaultValues: {
      phone: "",
    },
  });
  const { mutateAsync: startVerification, isPending: isStartingVerification } = useVerifyPhone();

  const { tenant } = useAppContext();
  const navigate = useNavigate();

  function onSubmit(values: z.infer<typeof VerifyPhoneValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    startVerification(values)
      .then((_) => {
        navigate(`/confirm-phone`, {
          state: { phone: values.phone },
        });
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.response.data.message);
      });

  }
  return (
    <Form {...form}>
      <div className="sm:w-420 flex-center flex-col">
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col w-full gap-5">
          <h1 className="h2-bold">
            Welcome
            <br /> <>{tenant === "visitor" ? "Visitor" : "Host"}</>
          </h1>
          <p className="text-gray-1">Let us verify your phone number.</p>
          <FormField
            control={form.control}
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
          <Button type="submit" disabled={isStartingVerification} className="shad-button_primary">
            {isStartingVerification ? (
              <div className="flex-center gap-3">
                <Loader />
                Sending...
              </div>
            ) : (
              <span>Continue</span>
            )}
          </Button>
        </form>
        <span className="text-gray-1 text-sm w-full flex-center flex-col mt-2">
          <p>Trouble logging in?</p>
          <p>Contact us: support@easyparkway.com</p>
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

export default EnterPhone;
