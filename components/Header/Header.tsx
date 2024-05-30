import { UserButton, auth } from "@clerk/nextjs";
import Link from "next/link";

export default async function Header() {
  const { userId } = auth();

  return (
    <div className="bg-blue-600 text-neutral-100 px-4">
      <div className="container mx-auto flex items-center justify-between py-4">
        <Link className="text-2xl font-bold" href="/">
          DentalEase
        </Link>
        <div>
          {userId ? (
            <div className="flex gap-4 items-center">
              <Link href="/dashboard">Dashboard</Link>
              <UserButton afterSignOutUrl="/" />
            </div>
          ) : (
            <div className="flex gap-4 items-center">
              <Link
                className="bg-white text-blue-600 p-2 rounded-md"
                href="/sign-up"
              >
                Sign up
              </Link>
              <Link
                className="bg-white text-blue-600 p-2 rounded-md"
                href="/sign-in"
              >
                Sign In
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
