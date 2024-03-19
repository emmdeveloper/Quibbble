import React from "react";
import Link from "next/link";
import AuthProviders from "./AuthProviders";
type userAuthenticationProps = {
  session: {} | null;
};

export default function UserProfile({ session }: userAuthenticationProps) {
  return (
    <div className="flexCenter gap-4">
      {session ? (
        <>
          UserPhoto
          <Link href={"/create-project"}>Share Work</Link>
        </>
      ) : (
        <AuthProviders />
      )}
    </div>
  );
}
