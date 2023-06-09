"use client";

import { signIn } from "next-auth/react";
import { FC, useState } from "react";
import Button from "@/components/ui/Button";
import { toast } from "@/components/ui/Toast";

interface SignInButtonProps {}

const SignInButton: FC<SignInButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState(false);

  const signInWithDiscord = async () => {
    setIsLoading(true);

    try {
      await signIn("discord");
    } catch (error) {
      toast({
        title: "Error signing in",
        message: "Please try again later",
        type: "error",
      });
    }
  };

  return (
    <Button onClick={signInWithDiscord} isLoading={isLoading}>
      Sign in
    </Button>
  );
};

export default SignInButton;
