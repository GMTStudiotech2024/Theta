import * as z from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
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
import Loader from "@/components/shared/Loader";
import { useToast } from "@/components/ui/use-toast";
import gmtStudioLogo from '/assets/icons/Theta.png';
import { SigninValidation } from "@/lib/validation";
import { useSignInAccount } from "@/lib/react-query/queries";
import { useUserContext } from "@/context/AuthContext";

const SigninForm = () => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const { checkAuthUser, isLoading: isUserLoading } = useUserContext();

  // Query
  const { mutateAsync: signInAccount, isPending } = useSignInAccount();

  const form = useForm<z.infer<typeof SigninValidation>>({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSignin = async (user: z.infer<typeof SigninValidation>) => {
    try {
      const session = await signInAccount(user);

      if (!session) {
        toast({ title: "Login failed. Please try again." });
        return;
      }

      const isLoggedIn = await checkAuthUser();

      if (isLoggedIn) {
        form.reset();
        navigate("/");
      } else {
        toast({ title: "Login failed. Please try again." });
      }
    } catch (error) {
      toast({ title: "An error occurred. Please try again later." });
    }
  };

  return (
      <Form {...form}>
        <div className="sm:w-420 flex-center flex-col">
          <img src={gmtStudioLogo} alt="GMTStudio" className="w-auto h-12 md:h-16" />
          <h2 className="h3-bold text-sky-500">Theta v0.7e</h2>

          <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">Log in to your account</h2>
          <h2 className="h3-bold md:h2-bold pt-5 sm:pt-12">登入帳號</h2>
          <p className="text-light-3 small-medium md:base-regular mt-2">
            Welcome back! Please enter your details.
          </p>
          <p className="text-light-3 small-medium md:base-regular mt-2">
            歡迎回來！請輸入電子郵件和密碼
          </p>
          <form onSubmit={form.handleSubmit(handleSignin)} className="flex flex-col gap-5 w-full mt-4">
            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                      <FormLabel className="shad-form_label">Email電子郵件</FormLabel>
                      <FormControl>
                        <Input type="email" className="shad-input" {...field} aria-required="true" aria-invalid={!!form.formState.errors.email} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                )}
            />

            <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                    <FormItem>
                      <FormLabel className="shad-form_label">Password密碼</FormLabel>
                      <FormControl>
                        <Input type="password" className="shad-input" {...field} aria-required="true" aria-invalid={!!form.formState.errors.password} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                )}
            />

            <div className="flex items-center justify-between">
              <Link to="/forgot-password" className="text-primary-500 text-small-semibold text-center">
                Forgot your password? 忘記密碼?
              </Link>
            </div>

            <Button type="submit" className="shad-button_primary" disabled={isPending || isUserLoading}>
              {isPending || isUserLoading ? (
                  <div className="flex-center gap-2">
                    <Loader /> Loading...
                  </div>
              ) : (
                  "Log in"
              )}
            </Button>

            <p className="text-small-regular text-light-2 text-center mt-2">
              Don&apos;t have an account? 還沒有帳號？
              <Link to="/sign-up" className="text-primary-500 text-small-semibold ml-1">
                Sign up 註冊
              </Link>
            </p>
          </form>
        </div>
      </Form>
  );
};

export default SigninForm;
