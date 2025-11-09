import React from "react";
import { SignIn, SignUp, SignedIn, SignedOut } from "@clerk/clerk-react";

export const AuthenticationPage = () => {
  return (
    <div className="auth-container">
      <SignedOut>
        <SignIn routing="path" path="/sign-in" />
        <SignUp routing="path" path="/sign-up" />
      </SignedOut>

      <SignedIn>
        <div className="redirect-message">
          You are already signed in.
        </div>
      </SignedIn>
    </div>
  );
};
