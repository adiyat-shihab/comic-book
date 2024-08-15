"use client";
import { Button } from "@/components/ui/button";
import { useUserSession } from "@/hooks/use-user-session";
import { signInWithGoogle, signOutWithGoogle } from "@/lib/firebase/auth";
import { createSession, removeSession } from "@/actions/auth-actions";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";

const Navbar = ({ session }: { session: string | null }) => {
  const handleSignIn = async () => {
    const userUid = await signInWithGoogle();
    if (userUid) {
      await createSession(userUid);
    }
  };
  const pathname = usePathname();
  const handleSignOut = async () => {
    await signOutWithGoogle();
    await removeSession();
  };
  return (
    <div
      className={`flex justify-between items-center border-b border-[#EAECF3] px-[14.43rem]  py-5 ${pathname === "/" || "hidden"}`}
    >
      <div className="flex gap-x-14 items-center">
        <h1 className={"text-2xl font-semibold tracking-wide"}>Book Library</h1>
        <ul>
          <Link className={" font-semibold text-[#5C5589] "} href={"/all"}>
            For You
          </Link>
        </ul>
      </div>
      <div className={"gap-x-8 flex"}>
        <Button
          className={
            "bg-primaryPurple border border-primaryBLack font-semibold tracking-wider hover:bg-[#3B2A93]  shadow-lg shadow-[#4f72cd33]"
          }
          onClick={handleSignIn}
        >
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default Navbar;
