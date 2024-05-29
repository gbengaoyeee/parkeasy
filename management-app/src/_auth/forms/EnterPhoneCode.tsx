import { CompleteVerificationValidation } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
import { OTPInput, SlotProps } from "input-otp";
import { z } from "zod";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useConfirmVerificationCode } from "@/lib/react-query/queriesAndMutations";

const EnterPhoneCode = () => {
  const form = useForm<z.infer<typeof CompleteVerificationValidation>>({
    resolver: zodResolver(CompleteVerificationValidation),
    defaultValues: {
      code: "",
    },
  });
  const { state = { phone: "'+17866432499" } } = useLocation();

  const MAX_OTP_LENGTH = 6;
  const [otpDisabled, setOtpDisabled] = useState(false);
  const { mutateAsync: finishVerification, isPending: isFinishing } = useConfirmVerificationCode();
  const navigate = useNavigate();

  useEffect(() => {
    if (!state || !state.phone) {
      toast.error("Could not find your phone number. please go back to the previous page and try again");
      return;
    }

    form.setValue("phone", state.phone);
  }, []);

  function onSubmit(values: z.infer<typeof CompleteVerificationValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    console.log("submitting code", values.code);

    finishVerification(values)
      .then((resp: any) => {
        toast.success(resp.message);
        navigate("/login");
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.response.data.message);
      });
  }
  return (
    <div className="flex flex-col gap-4 justify-center items-center">
      <p>Please Enter the code sent to {state.phone}</p>
      <OTPInput
        maxLength={6}
        containerClassName="group flex items-center has-[:disabled]:opacity-30"
        disabled={otpDisabled}
        autoFocus
        onChange={(value) => {
          form.setValue("code", value);
          if (value.length === MAX_OTP_LENGTH) {
            setOtpDisabled(true);
            console.log(form.getValues());
            form.handleSubmit(onSubmit)();
          }
        }}
        render={({ slots }) => (
          <>
            <div className="flex">
              {slots.slice(0, 3).map((slot, idx) => (
                <Slot key={idx} {...slot} />
              ))}
            </div>

            <FakeDash />

            <div className="flex">
              {slots.slice(3).map((slot, idx) => (
                <Slot key={idx} {...slot} />
              ))}
            </div>
          </>
        )}
      />
      {isFinishing && <span>Verifying...</span>}
    </div>
  );
};

function Slot(props: SlotProps) {
  return (
    <div
      // className={cn(
      //   'relative w-10 h-14 text-[2rem]',
      //   'flex items-center justify-center',
      //   'transition-all duration-300',
      //   'border-border border-y border-r first:border-l first:rounded-l-md last:rounded-r-md',
      //   'group-hover:border-accent-foreground/20 group-focus-within:border-accent-foreground/20',
      //   'outline outline-0 outline-accent-foreground/20',
      //   { 'outline-4 outline-accent-foreground': props.isActive },
      // )}
      className={`relative w-10 h-14 text-[2rem] flex items-center justify-center transition-all duration-300 
        border-border border-y border-r first:border-l first:rounded-l-md last:rounded-r-md 
        group-hover:border-accent-foreground/20 group-focus-within:border-accent-foreground/20
        outline outline-0 outline-accent-foreground/20 ${props.isActive && "outline-4 outline-accent-foreground"}`}
    >
      {props.char !== null && <div>{props.char}</div>}
      {props.hasFakeCaret && <FakeCaret />}
    </div>
  );
}

function FakeCaret() {
  return (
    <div className="absolute pointer-events-none inset-0 flex items-center justify-center animate-caret-blink">
      <div className="w-px h-8 bg-white" />
    </div>
  );
}

function FakeDash() {
  return (
    <div className="flex w-10 justify-center items-center">
      <div className="w-3 h-1 rounded-full bg-primary-1" />
    </div>
  );
}

export default EnterPhoneCode;
