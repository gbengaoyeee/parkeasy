import Divider from "@/components/shared/Divider";
import { zodResolver } from "@hookform/resolvers/zod";
import { useFieldArray, useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { OnboardManagementValidation } from "@/lib/validation";
import { useSubmitManagementOnboard } from "@/lib/react-query/queriesAndMutations";
import Loader from "@/components/shared/Loader";
import { toast } from "sonner";
import { useAuthContext } from "@/context/AuthContext";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { StaffOption, staffOptions } from "@/lib/constants.ts";
import { AppwriteException } from "appwrite";

interface OnboardingProps {
  onNext: () => void;
}
const OnboardManagement = ({ onNext }: OnboardingProps) => {
  const { user } = useAuthContext();
  const form = useForm<z.infer<typeof OnboardManagementValidation>>({
    resolver: zodResolver(OnboardManagementValidation),
    defaultValues: {
      email: "",
      oldPassword: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      address: "",
      staffMembers: Array.from({ length: 1 }, () => ({
        staffRole: "",
        staffName: "",
        staffEmail: "",
      })),
    },
  });

  const { fields: staffMembersFields } = useFieldArray({
    control: form.control,
    name: "staffMembers",
  });

  const { isPending: isSubmitting, mutateAsync: submitManagementOnboard } =
    useSubmitManagementOnboard(user?.$id ?? "");

  function onSubmit(values: z.infer<typeof OnboardManagementValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    submitManagementOnboard(values)
      .then((_: any) => {
        toast.success("Onboarded management successfully!");
        onNext();
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
        <section>
          <h2 className="h3-bold mb-5">Onboarding - Building Management Company</h2>
        </section>
        <section className="flex items-stretch gap-3">
          <div>
            <h2 className="h3-bold">Company Profile Details</h2>
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company phone number</FormLabel>
                  <FormControl>
                    <Input placeholder="+16475555555" {...field} />
                  </FormControl>
                  <FormMessage className="shad-form_message" />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="address"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Company address</FormLabel>
                  <FormControl>
                    <Input placeholder="123 Main Street" {...field} />
                  </FormControl>
                  <FormMessage className="shad-form_message" />
                </FormItem>
              )}
            />
          </div>
          <Divider orientation="vertical" />
          <div>
            <h2 className="h3-bold mb-3">Set your username & password</h2>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="xyz@company.com" {...field} />
                  </FormControl>
                  <FormMessage className="shad-form_message" />
                </FormItem>
              )}
            />
            {user && user.passwordUpdate.length > 0 && (
              <FormField
                control={form.control}
                name="oldPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Old password</FormLabel>
                    <FormControl>
                      <Input type="password" placeholder="Enter password" {...field} />
                    </FormControl>
                    <FormMessage className="shad-form_message" />
                  </FormItem>
                )}
              />
            )}
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
        </section>
        <section>
          <h2 className="h3-bold">Add your staff member(Optional)</h2>
          <div>
            {staffMembersFields.map((staff, index) => {
              let staffMembers = form.getValues().staffMembers ?? [];
              return (
                <div key={staff.id} className="flex gap-3 mb-4 items-end">
                  <FormField
                    name={`staffMembers.${index}.staffRole`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Staff Role</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a staff role" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent className="bg-light-1">
                            {Object.keys(staffOptions).map((option) => (
                              <SelectItem key={option} value={option}>
                                {staffOptions[option as StaffOption]}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  ></FormField>
                  <FormField
                    name={`staffMembers.${index}.staffName`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Staff Name</FormLabel>
                        <FormControl>
                          <Input {...field} onChange={field.onChange} placeholder="John Smith" />
                        </FormControl>
                        <FormMessage className="shad-form_message" />
                      </FormItem>
                    )}
                  />
                  <FormField
                    name={`staffMembers.${index}.staffEmail`}
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Staff Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            onChange={field.onChange}
                            placeholder="xyz@company.com"
                          />
                        </FormControl>
                        <FormMessage className="shad-form_message" />
                      </FormItem>
                    )}
                  />
                  {staffMembers.length > 1 && (
                    <Button
                      onClick={(e) => {
                        e.stopPropagation();
                        let arr = form.getValues().staffMembers ?? [];
                        arr.splice(index, 1);
                        form.setValue("staffMembers", [...arr]);
                      }}
                      className="shad-button_primary"
                    >
                      -
                    </Button>
                  )}
                  <Button
                    onClick={() => {
                      let arr = form.getValues().staffMembers ?? [];
                      form.setValue("staffMembers", [
                        ...arr,
                        { staffEmail: "", staffName: "", staffRole: "" },
                      ]);
                    }}
                    className="shad-button_primary"
                  >
                    +
                  </Button>
                </div>
              );
            })}
          </div>
        </section>
        <Button type="submit" disabled={isSubmitting} className="shad-button_primary">
          {isSubmitting ? (
            <div className="flex-center gap-3">
              <Loader />
              Submitting
            </div>
          ) : (
            <span>Continue</span>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default OnboardManagement;
