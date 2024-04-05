import SideBar from "@/components/shared/SideBar";
import { Outlet } from "react-router-dom";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { useUserContext } from "@/context/UserContext";
import { Button } from "@/components/ui/button";
import Loader from "@/components/shared/Loader";
import { VisitorSignUpValidation } from "@/lib/validation";
import { useUpdateUser } from "@/lib/react-query/queriesAndMutations";
import { User } from "@/types";
import { toast } from "sonner";
import Header from "@/components/shared/Header";

const VisitorRootLayout = () => {
  const { user, refetchUser } = useUserContext();

  return (
    <div className="flex w-full">
      <div className="leftsidebar">
        <SideBar />
      </div>
      <section className="w-full p-5">
        <div> <Header /></div>
        <Outlet />
        {user && <UpdateCustomerUserModal user={user} refetchUser={refetchUser} />}
      </section>
    </div>
  );
};

const UpdateCustomerUserModal = (
  { user, refetchUser }: { user?: User | null; refetchUser: () => void }
) => {
  const form = useForm<z.infer<typeof VisitorSignUpValidation>>({
    resolver: zodResolver(VisitorSignUpValidation),
    defaultValues: {
      firstName: user?.first_name ? `${user?.first_name}` : "",
      lastName: user?.last_name ? `${user?.last_name}` : "",
      email: user?.email ? `${user?.email}` : "",
      phone: user?.phone_number ? `${user?.phone_number}` : "",
    },
  });

  const { mutateAsync: updateUser, isPending: isUpdating } = useUpdateUser();

  function onSubmit(values: z.infer<typeof VisitorSignUpValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    if (!user) {
      toast.error("Please log back in to subscribe to parking spot");
      return;
    }

    updateUser({
      dto: values,
      userId: user.id,
      userRoles: [...user.user_roles, "visitor"],
    })
      .then((_) => {
        toast.success("User details updated successfully");
        refetchUser();
      })
      .catch((error) => {
        console.error(error.message);
        toast.error(error.response.data.message);
      });
  }
  return (
    <Dialog
      open={!user?.stripe_customer_id}
      // onOpenChange={setOpenSubscribeModal}
    >
      {/* <DialogTrigger asChild data-state="closed">
        <Button className="shad-button_primary w-[250px]">Subscribe to this spot</Button>
      </DialogTrigger> */}
      <DialogContent className="bg-light-1">
        <DialogHeader>
          <DialogTitle>Let us update your details</DialogTitle>
        </DialogHeader>

        <Form {...form}>
          <div className="sm:w-420 flex-center flex-col">
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col w-full gap-5">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What is your first name?</FormLabel>
                    <FormControl>
                      <Input placeholder="John" {...field} />
                    </FormControl>
                    <FormMessage className="text-red" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What is your last name?</FormLabel>
                    <FormControl>
                      <Input placeholder="Doe" {...field} />
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
                    <FormLabel>What is your email?</FormLabel>
                    <FormControl>
                      <Input placeholder="xyz@example.com" {...field} />
                    </FormControl>
                    <FormMessage className="text-red" />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>What is your phone number? include country code (eg. +971)</FormLabel>
                    <FormControl>
                      <Input placeholder="+971123456789" {...field} />
                    </FormControl>
                    <FormMessage className="text-red" />
                  </FormItem>
                )}
              />

              <DialogFooter>
                <Button type="submit" disabled={isUpdating} className="shad-button_primary">
                  {isUpdating ? (
                    <div className="flex-center gap-3">
                      <Loader />
                      Submitting...
                    </div>
                  ) : (
                    <span>Submit</span>
                  )}
                </Button>
              </DialogFooter>
            </form>
          </div>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default VisitorRootLayout;
