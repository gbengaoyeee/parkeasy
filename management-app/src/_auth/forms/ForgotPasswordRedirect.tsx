import { PasswordRecoveryValidation } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useLocation, useNavigate } from "react-router-dom";
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
import { useFinishPasswordRecovery } from "@/lib/react-query/queriesAndMutations";
import { Button } from "@/components/ui/button";
import Loader from "@/components/shared/Loader";
import { AppwriteException } from "appwrite";

/*

Expired link for testing
http://localhost:5173/sso-redirect?userId=26a1f03b-274f-413d-9fd0-55dcbf12d3e1&secret=bb3abf652e23d61d94adfa9b9aa5055820d862c61c668e54717a56be555fcdceaa03dc0a89a2265db2bafbd29a7807ddbbcf86f5fe5b9cefd3ec5681d58956b363d56d48a9a905fc61ad0392bba2e6ed774acb6064fdc2dcd67123f923b1a075f805662e3c6359d53e263b0a732745b826a63d503d1c42cddb75fac04590e91c&expire=2023-12-13T20%3A57%3A06.143%2B00%3A00&project=656d74d2808bca1159bd
*/
const SSORedirect = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const secret = query.get("secret");
  const userId = query.get("userId");
  const navigate = useNavigate();

  const form = useForm<z.infer<typeof PasswordRecoveryValidation>>({
    resolver: zodResolver(PasswordRecoveryValidation),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  const { isPending: isSubmitting, mutateAsync: handleSubmit } = useFinishPasswordRecovery(
    userId ?? "",
    secret ?? ""
  );

  function onSubmit(values: z.infer<typeof PasswordRecoveryValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    handleSubmit(values)
      .then((_) => {
        toast.success("You have successfully changed password");
        navigate("/login");
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
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div>
          <h2 className="h3-bold mb-3">Reset your password</h2>
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>New password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Enter password" {...field} />
                </FormControl>
                <FormMessage className="shad-form_message" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="confirmPassword"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Confirm password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Confirm password" {...field} />
                </FormControl>
                <FormMessage className="shad-form_message" />
              </FormItem>
            )}
          />
        </div>
        <Button type="submit" disabled={isSubmitting} className="shad-button_primary w-full mt-4">
          {isSubmitting ? (
            <div className="flex-center gap-3">
              <Loader />
              Submitting
            </div>
          ) : (
            <span>Reset password</span>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default SSORedirect;
