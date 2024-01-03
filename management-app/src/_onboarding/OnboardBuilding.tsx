import Loader from "@/components/shared/Loader";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Select as AntSelect } from "antd";
import { useAuthContext } from "@/context/AuthContext";
import {
  buildingFacilities,
  BuildingFacility,
  BuildingType,
  buildingTypes,
} from "@/lib/constants.ts";
import { useSubmitBuildingOnboard } from "@/lib/react-query/queriesAndMutations";
import { OnboardBuildingValidation } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface OnboardingProps {
  onNext: () => void;
}

const OnboardBuilding = ({ onNext }: OnboardingProps) => {
  const { user } = useAuthContext();
  const form = useForm<z.infer<typeof OnboardBuildingValidation>>({
    resolver: zodResolver(OnboardBuildingValidation),
    defaultValues: {
      buildingName: "",
      buildingType: "",
      address: "",
      city: "",
      state: "",
      zipcode: "",
      country: "",
      noOfUnits: "",
      noOfParkingFloors: "",
      noOfParkingSpots: "",
      noOfDeveloperParkingSpots: "",
      facilities: [],
    },
  });

  const { isPending: isSubmitting, mutateAsync: submitBuildingOnboard } =
    useSubmitBuildingOnboard(user?.email ?? "");

  function onSubmit(values: z.infer<typeof OnboardBuildingValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    submitBuildingOnboard(values)
      .then((resp: any) => {
        toast.success(resp.message);
        onNext();
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.response.data.message);
      });
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <section>
          <h2 className="h3-bold mb-5">Onboarding - Building / Community</h2>
        </section>
        <section className="flex flex-col lg:grid lg:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="buildingName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Building Name</FormLabel>
                <FormControl>
                  <Input placeholder="Xyz Company" {...field} />
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
                <FormLabel>Building address</FormLabel>
                <FormControl>
                  <Input placeholder="123 Main Street" {...field} />
                </FormControl>
                <FormMessage className="shad-form_message" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="New York City" {...field} />
                </FormControl>
                <FormMessage className="shad-form_message" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State/Province</FormLabel>
                <FormControl>
                  <Input placeholder="NY" {...field} />
                </FormControl>
                <FormMessage className="shad-form_message" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Country</FormLabel>
                <FormControl>
                  <Input placeholder="United States of America" {...field} />
                </FormControl>
                <FormMessage className="shad-form_message" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="zipcode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Zipcode/Postal code</FormLabel>
                <FormControl>
                  <Input placeholder="33128" {...field} />
                </FormControl>
                <FormMessage className="shad-form_message" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="noOfUnits"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Total number of housing units</FormLabel>
                <FormControl>
                  <Input placeholder="100" {...field} />
                </FormControl>
                <FormMessage className="shad-form_message" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="noOfParkingFloors"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Total number of parking floors</FormLabel>
                <FormControl>
                  <Input placeholder="100" {...field} />
                </FormControl>
                <FormMessage className="shad-form_message" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="noOfParkingSpots"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Total number of parking spots</FormLabel>
                <FormControl>
                  <Input placeholder="100" {...field} />
                </FormControl>
                <FormMessage className="shad-form_message" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="noOfDeveloperParkingSpots"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Total number of developer parking spots</FormLabel>
                <FormControl>
                  <Input placeholder="100" {...field} />
                </FormControl>
                <FormMessage className="shad-form_message" />
              </FormItem>
            )}
          />
        </section>
        <section>
          <FormField
            control={form.control}
            name="buildingType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select the building type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className="bg-light-1">
                    {Object.keys(buildingTypes).map((option) => (
                      <SelectItem key={option} value={option}>
                        {buildingTypes[option as BuildingType]}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage className="shad-form_message" />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="facilities"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Select the facilities this building has</FormLabel>
                <AntSelect mode="multiple" onChange={field.onChange} className="w-full">
                  {Object.keys(buildingFacilities).map((option) => (
                    <AntSelect.Option key={option} value={option}>
                      {buildingFacilities[option as BuildingFacility]}
                    </AntSelect.Option>
                  ))}
                </AntSelect>
                <FormMessage className="shad-form_message" />
              </FormItem>
            )}
          />
        </section>

        <Button type="submit" disabled={isSubmitting} className="shad-button_primary mt-5">
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

export default OnboardBuilding;
