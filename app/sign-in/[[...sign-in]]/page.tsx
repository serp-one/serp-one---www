import React from "react";
import { ClerkProvider, SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <ClerkProvider>
      <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-l from-[#ad5389] to-[#3c1053]">
      <SignIn afterSignInUrl="/app/dashboard" signUpUrl="/sign-up" />
      </div>
    </ClerkProvider>
  );
}
