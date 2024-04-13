import { Button } from "@/components/ui/button";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SSOValidation } from "@/lib/validation";
import { Link } from "react-router-dom";
import { toast } from "sonner";
import Loader from "@/components/shared/Loader";
import { useAuthContext } from "@/context/AuthContext";
import { getManagementByEmail } from "@/api/management";
import { useAppContext } from "@/context/AppContext";
import { getUser } from "@/api/user";
import { useEffect, useState } from "react";
import useBreakpoints from "@/hooks/useBreakpoints";
import { Dialog, DialogContent,  } from "@/components/ui/dialog";

const LoginForm = () => {
  // const { isPending: isSigningIn, mutateAsync: handleSignIn } = useLoginByEmail();
  const { signInPasswordless, isLoading: isSigningIn } = useAuthContext();
  const { isSmall, isMedium } = useBreakpoints();

  const form = useForm<z.infer<typeof SSOValidation>>({
    resolver: zodResolver(SSOValidation),
    defaultValues: {
      email: "",
    },
  });

  const { tenant } = useAppContext();
  // const form = useForm<z.infer<typeof LoginValidation>>({
  //   resolver: zodResolver(LoginValidation),
  //   defaultValues: {
  //     email: "",
  //     password: "",
  //   },
  // });

  const [inputFocused, setInputFocused] = useState(false);
  const [showLoginConfirmationModal, setShowLoginConfirmationModal] = useState(false);
  const [loginMessage, setLoginMessage] = useState("");

  useEffect(() => {
    const viewport = document.querySelector("meta[name=viewport]");
    if (inputFocused) {
      // Setting viewport to default zoom
      viewport?.setAttribute("content", "width=device-width, initial-scale=1");
    } else {
      // Setting viewport to zoom out completely
      viewport?.setAttribute("content", "width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0");
    }
  }, [inputFocused]);

  function onSubmit(values: z.infer<typeof SSOValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    // signInWithEmail(values);

    if (tenant === "visitor") {
      getUser(values.email)
        .then((_) => {
          signInPasswordless(values)
            .then((res) => {
              if (res) {
                if (isSmall || isMedium) {
                  setShowLoginConfirmationModal(true);
                  setLoginMessage("Please check your email for a login link");
                } else {
                  toast.success("Please check your email for a login link");
                }
              }
            })
            .catch((error) => {
              console.error(error.message);
              if (error.response && error.response.data) {
                if (isMedium || isSmall) {
                  setShowLoginConfirmationModal(true);
                  setLoginMessage(`${error.response.data.message}: No user found under email ${values.email}. Please sign up first.`);
                } else {
                  toast.error(`${error.response.data.message}: No user found under email ${values.email}. Please sign up first.`);
                }
              } else {
                if (isMedium || isSmall) {
                  setShowLoginConfirmationModal(true);
                  setLoginMessage(error.message);
                } else {
                  toast.error(error.message);
                }
              }
            });
        })
        .catch((error) => {
          if (error.response && error.response.data) {
            if (isMedium || isSmall) {
              setShowLoginConfirmationModal(true);
              setLoginMessage(`${error.response.data.message}: No user found under email ${values.email}. Please sign up first.`);
            } else {
              toast.error(`${error.response.data.message}: No user found under email ${values.email}. Please sign up first.`);
            }
          } else {
            if (isMedium || isSmall) {
              setShowLoginConfirmationModal(true);
              setLoginMessage(error.message);
            } else {
              toast.error(error.message);
            }
          }
        });
    } else {
      getManagementByEmail(values.email)
        .then((_) => {
          signInPasswordless(values)
            .then((res) => {
              if (res) {
                if (isSmall || isMedium) {
                  setShowLoginConfirmationModal(true);
                  setLoginMessage("Please check your email for a login link");
                } else {
                  toast.success("Please check your email for a login link");
                }
              }
            })
            .catch((error) => {
              console.error(error.message);
              if (error.response && error.response.data) {
                if (isMedium || isSmall) {
                  setShowLoginConfirmationModal(true);
                  setLoginMessage(`${error.response.data.message}: No user found under email ${values.email}. Please sign up first.`);
                } else {
                  toast.error(`${error.response.data.message}: No user found under email ${values.email}. Please sign up first.`);
                }
              } else {
                if (isMedium || isSmall) {
                  setShowLoginConfirmationModal(true);
                  setLoginMessage(error.message);
                } else {
                  toast.error(error.message);
                }
              }
            });
        })
        .catch((error) => {
          if (error.response && error.response.data) {
            if (isMedium || isSmall) {
              setShowLoginConfirmationModal(true);
              setLoginMessage(`${error.response.data.message}: No user found under email ${values.email}. Please sign up first.`);
            } else {
              toast.error(`${error.response.data.message}: No user found under email ${values.email}. Please sign up first.`);
            }
          } else {
            if (isMedium || isSmall) {
              setShowLoginConfirmationModal(true);
              setLoginMessage(error.message);
            } else {
              toast.error(error.message);
            }
          }
        });
    }
  }
  return (
    <>
      {(isMedium || isSmall) && <LoginConfirmationModal message={loginMessage} show={showLoginConfirmationModal} setShow={setShowLoginConfirmationModal} />}
      <Form {...form}>
        <div className="sm:w-420 flex-center flex-col">
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col w-full gap-5">
            <h1 className="h2-bold">
              Welcome
              <br /> <>{tenant === "visitor" ? "Visitor" : "Host"}</>
            </h1>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Your Email</FormLabel>
                  <FormControl>
                    <Input placeholder="xyz@company.com" {...field} onFocus={() => setInputFocused(true)} onBlur={() => setInputFocused(false)} />
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
    </>
  );
};

const LoginConfirmationModal = ({ message, show, setShow }: { message: string; show: boolean; setShow: (show: boolean) => void }) => {
  return (
    <Dialog open={show} onOpenChange={() => setShow(false)}>
      <DialogContent className="bg-light-1">
        {/* <DialogHeader>
          <DialogTitle>Please check your email for a login link</DialogTitle>
        </DialogHeader> */}
        <p>{message}</p>
      </DialogContent>
    </Dialog>
  );
};

export default LoginForm;
